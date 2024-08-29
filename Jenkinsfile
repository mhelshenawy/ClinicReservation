pipeline {

    agent any

    environment{
        DOCKERHUB_CREDENTIALS=credentials('jo_ashraf')
    }

    stages {

        stage('CI') {
            steps {
               sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u youssefashraf18 --password-stdin"
               sh "pwd"
               sh "ls"
               sh "docker build -f Dockerfile -t youssefashraf18/frontend-image  ."
               sh "docker push youssefashraf18/frontend-image"
            }
        }

        stage('CD') {
            steps {
               sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u youssefashraf18 --password-stdin"
               sh "docker run -d --name frontjenk -p 4200:4200 youssefashraf18/frontend-image"
            }
        }
    }
}
