const memePosts = require('./posts.js')

const verified = (req, memePosts) => {
    let verified_in;
    if (isNaN(req.params.id[1])) {
        console.log(req.params.id[1])
        verified_in = 500
    } else if (memePosts.find((verifier) => req.params.id == verifier.id) ) {
        verified_in = 200
    } else {
        verified_in = 404
    }
    if (verified_in == 200) {
        return memePosts
    } else {
        return verified_in
    }
}

module.exports = verified