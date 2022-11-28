pipeline {
  stages {
    stage('Docker') {
      steps {
          image 'node:19-alpine3.15'
          args '-p 3000:3000'
        }
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'node index.js'
      }
    }
  }
}
