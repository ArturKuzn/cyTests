pipeline {
    agent any

    tools {nodejs "NodeJS"}


            stages {
                stage('Install dependencies') { 
                    steps {
                        sh 'npm ci'
            }
        }
                stage('Cypress run') { 
                    steps {
                        sh 'npm run allure:clearData'
                        sh 'npm run cy:testWithAllureReport'
            }
        }
                stage('Generate report') { 
                    steps {
                        sh 'npm run allure:generateReport'
                        allue(
                            results: [['allure-results']]
                        )
            }
        }
    }

}