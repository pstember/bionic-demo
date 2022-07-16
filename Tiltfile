print('Deploying bionic-demo')

print('Creating namespace')
k8s_yaml(['namespace.yaml'])

print('Deploying shared services')
k8s_yaml(['mongodb/mongodb-client.yaml'])
k8s_yaml(['mongodb/mongodb-secrets.yaml'])
k8s_yaml(['mongodb/mongodb-deployment.yaml'])
k8s_yaml(['mongodb/mongodb-nodeport-svc.yaml'])
k8s_yaml(['mongodb/mongodb-pv.yaml'])
k8s_yaml(['mongodb/mongodb-pvc.yaml'])
k8s_resource("mongo", labels="shared_ressources")
k8s_resource("mongo-client", labels="shared_ressources")

print('Deploying Registry')
k8s_yaml(['registry/deployment.yaml']) 
k8s_resource("registry", labels="frontend")

print('Deploying Distance')
k8s_yaml(['distance/deployment.yaml']) 
k8s_resource("distance", labels="backend")

print('Deploying Users')
k8s_yaml(['users/deployment.yaml'])
k8s_resource("users", labels="backend")






