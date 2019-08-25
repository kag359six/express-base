import chai from 'chai'
import chaiHttp from 'chai-http'
import server from './server'

chai.use(chaiHttp)
chai.should()

describe('route "/"', function() {
  it('/GET should respond with the correct message', function(done) {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.message.should.be.equal('Hello Worlds')
        done()
      })
  })
})
