// const ENV_URL = 'https://test-in.rnd.projectplace.com/'
const ENV_URL = 'https://local.rnd.projectplace.com'

describe('Test-in Service - Projects', function(){
  var auth_email, auth_pwd = "111111";

  before(function(){
    cy.viewport('macbook-15')
    cy.visit('/')
    /*    
    console.log(cy.getCookies())
    if (cy.url().should('not.equal', '/#myoverview'))
    {
      var CREATE_USER = '/public/api/v1/test/accounts/enterprise'
      cy.request({ url: CREATE_USER, method: 'POST', form:true, body: {user_name:'Test_Account'}})
        .then(function (response) {
          console.log(response.body)
          auth_email = response.body.owner.email
          cy
            .get('input[type=email]').type(auth_email)
            .get('input[type=password]').type('111111')
            .get('button.pp-btn--primary').click()
            .server()
            .route('/api/v1/user/me/recent-documents/**').as('getState')
            .wait('@getState')
        })
    }*/
  })

  beforeEach(function () {
    cy.visit('/#myoverview')
    cy
    .server()
    .route('/api/v1/user/me/recent-documents').as('getState')
    .wait('@getState')
    cy.viewport('macbook-15')
  })

  it('should move a new task to today section', function(){
    cy.get('.pp-myassignemnts__droppable').first()
      .get('.pp-assignments__list-item').first()
      .get('.pp-myassignments__segment-links-container').invoke('show')
      .contains('Today').click()
  })

  it('should create a new task in today section', function(){
    cy.contains('Today').get('.icon-plus-sign-thin').first().click()
      .get('input.pp-myoverview__add-assignment-input').type('FirstTask{enter}')
  })

  // it('should create a new project', function(){
  //   cy.get('.pp-myoverview__createws-btn', {timeout: 8000}).click()
  //     .get('.pp-choosews__wsitem > * > button').last().click()
  //     .get('span.pp-radiobutton__radiobutton').last().click()
  //     .get('[data-sel-project-name]').type('NewProject1')
  //     .get('.pp-createws__buttons .pp-btn--primary').click()
  //     .get('.pp-titleeditor__result', {timeout: 8000})
  //         .should('contain', 'NewProject1')

  // })


})
