pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        STACK_NAME = 'idream-webapp'
        SONAR_SCANNER_HOME = tool 'SonarQube Scanner'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Lint Code') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Build Next.js Application') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarQube Scanner'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=my-nextjs-app -Dsonar.sources=src -Dsonar.host.url=http://idream-webapp:9000 -Dsonar.login=your-sonarqube-token"
                }
            }
        }

        stage('Deploy to AWS with SST') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-credentials']]) {
                        sh 'npx sst deploy --stage prod'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}