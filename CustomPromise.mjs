const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}

function isThenable(val) {
    return val instanceof CustomPromise;
}
class CustomPromise {
    constructor(callback) {
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];
        try {
            callback(this._resolve, this._reject);
        } catch (err) {
            this._reject(err)
        }
    }

    _resolve = (value) => {
        this.updateResult(value, STATE.FULFILLED);
    }

    _reject = (error) => {
        this.updateResult(error, STATE.REJECTED);
    }

    updateResult(value, state) {
        setTimeout(() => {
            if (this.state !== STATE.PENDING) {
                return;
            }

            if (isThenable(value)) {
                return value.then(this._resolve, this._reject);
            }

            this.value = value;
            this.state = state;

            this.executeHandlers();
        }, 0);
    }

    addHandlers(handlers) {
        this.handlers.push(handlers);
        this.executeHandlers();
    }

    executeHandlers() {
        if (this.state === STATE.PENDING) {
            return null;
        }

        this.handlers.forEach((handler) => {
            if (this.state === STATE.FULFILLED) {
                return handler.onSuccess(this.value);
            }
            return handler.onFail(this.value);
        });
        this.handlers = [];
    }

    then(onSuccess, onFail) {
        return new CustomPromise((resolve, reject) => {
            this.addHandlers({
                onSuccess: function (value) {
                    if (!onSuccess) {
                        return resolve(value);
                    }
                    try {
                        return resolve(onSuccess(value))
                    } catch (err) {
                        return reject(err);
                    }
                },
                onFail: function (value) {
                    if (!onFail) {
                        return reject(value);
                    }
                    try {
                        return resolve(onFail(value))
                    } catch (err) {
                        return reject(err);
                    }
                }
            });
        });
    }

    catch(onFail) {
        return this.then(null, onFail);
    }

    finally(callback) {
        return new CustomPromise((resolve, reject) => {
            let val;
            let wasRejected;
            this.then((value) => {
                wasRejected = false;
                val = value;
                return callback();
            }, (err) => {
                wasRejected = true;
                val = err;
                return callback();
            }).then(() => {
                if (!wasRejected) {
                    return resolve(val);
                }
                return reject(val);
            })
        })
    }
}
export default CustomPromise;