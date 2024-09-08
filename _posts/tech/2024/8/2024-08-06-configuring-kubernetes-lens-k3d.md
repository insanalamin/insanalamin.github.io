---
layout: post
title:  "Deploying Kubernetes Using k3d, kubectl and Docker"
date:   2024-08-06 17:00:51 +1000
categories: tech 
---
Kubernetes makes managing container within cluster easier. For Docker user who has fewer resources, there is an alternative solution to install Kubernetes on their servers, namely <b>k3d</b>.

## Install Kubernetes in Existing Docker Engine with k3d
k3d is a tool to install and manage Kubernetes cluster using existing Docker system. 
- 

for example:
```sh
k3d cluster create my-cluster-name \
    --api-port 127.0.0.1:40001 \
    --port "30000-30100:30000-30100@server:0" \
    --k3s-arg "--tls-san=127.0.0.1@server:0" \
    --volume /home/cluster-data:/mnt/cluster-data
```

### k3d properties

Property | Value | Description
---|---|---
**--volume** | <HOST_DIR_PATH>:<CONTAINER_DIR_PATH> | Mount folder to be used for cluster applications data 
**--api-port** |  | Define static k8s API port 
**--port** | |  Mount range of host ports into container ports
**--k3s-arg** | | Arguments for k3s under k3d cluster

### k3s properties

Property | Value | Description
---|---|---
**--tls-san** |  |  

## Kubectl for Managing Kubernetes Cluster

## Kubernetes Objects
Kubernetes objects are persistent entities that act as building blocks in the Kubernetes system [ref](https://kubernetes.io/docs/concepts/overview/working-with-objects/).

### Namespace 

### Secret

### StorageClass
StorageClass
- In k3d mounting pv manually to local-path is troublesome

### PersistentVolume

### Service
Service Object exposes the network of one or more Pods in the cluster.

- Headless Service
- NodePort Service

### StatefulSet
StatefulSet is used to manage containers that use stateful state such as databases, object storages, and applications that need to mount persistent storage such as web apps.  

Property | Value | Description
---|---|---
**spec.template.spec.hostNetwork** |  |  

### PersistentVolumeClaim

Property | Value | Description
---|---|---
**provisioner** |  | Component responsible for automatically creating and managing storage resources 
 | rancher.io/local-path | Use local storage. No network overhead.
 | kubernetes.io/no-provisioner | No dynamic provisioning.
 | longhorn | Distributed block storage system for Kubernetes. Has network overhead. 
**volumeBindingMode** | | 

### Config Map

## Port Forwarding

### Kubernetes Pods to VPS Host

### Desktop to VPS Host using SSH Tunneling
SSH Tunneling is a cost effective part to to connect to the internal network of Kubernetes host server, and  

```sh
#!/bin/bash

# Set your SSH user and remote host here
SSH_USER="your_ssh_user"
REMOTE_HOST="your_remote_host"

# Define your remote port forwarding configurations
# Format: "remote_port:local_address:local_port"
PORT_FORWARDINGS=(
    "9090:localhost:8080"   # Example: Forward remote port 9090 to local port 8080
    "9091:localhost:8081"   # Example: Forward remote port 9091 to local port 8081
    "9092:localhost:8082"   # Example: Forward remote port 9092 to local port 8082
)

# Generate the SSH command with all port forwardings
SSH_CMD="ssh"
for forwarding in "${PORT_FORWARDINGS[@]}"; do
    SSH_CMD+=" -R $forwarding"
done
SSH_CMD+=" $SSH_USER@$REMOTE_HOST"

# Prompt for SSH password and execute the SSH command
echo "Please enter your SSH password:"
read -s PASSWORD

# Use sshpass to supply the password to SSH
sshpass -p "$PASSWORD" $SSH_CMD
```

### VPS Host to Cloudflare using Cloudflared

### Forward Localhost Port to Internal IP Port
```sh
#!/bin/bash

# Get the internal IP of the node
INTERNAL_IP=$(kubectl get node -o=jsonpath='{.items[0].status.addresses[?(@.type=="InternalIP")].address}')

# Define an array of ports that you want to redirect
PORTS=(8529 5432 3306)  # Add as many ports as needed

# Loop through each port and update iptables rules
for PORT in "${PORTS[@]}"; do
    # Remove any existing iptables rule for the current port
    iptables -t nat -D OUTPUT -p tcp --dport $PORT -j DNAT --to-destination $INTERNAL_IP:$PORT 2>/dev/null
    
    # Add the new iptables rule for the current port
    iptables -t nat -A OUTPUT -p tcp --dport $PORT -j DNAT --to-destination $INTERNAL_IP:$PORT
done
```

## Kubernetes Management Interface

### Kubectl Alias

### Lens

### K9s

## Accessing the Cluster Using Lens Kubernetes Desktop GUI
Lens is a GUI tool for managing Kubernetes cluster
