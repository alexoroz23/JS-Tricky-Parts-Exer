function curriedAdd(total = 0) {
    function add(num) {
        if (num === undefined) {
            return total;
        }
        total += num;
        return add;
    }
    return add;
}

module.exports = { curriedAdd };
