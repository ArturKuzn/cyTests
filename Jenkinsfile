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
                        sh 'allure:clearData'
                        sh 'cy:testWithAllureReport'
            }
        }
                stage('Generate report') { 
                    steps {
                        sh 'allure:generateReport'
                        allue(
                            results: [['allure-results']]
                        )
            }
        }
    }

}