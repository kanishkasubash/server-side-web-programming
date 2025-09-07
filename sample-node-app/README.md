# 🐳 Docker CLI Cheat Sheet

---

## 🔹 1. System & General Info

```bash
docker version                # Show Docker version info
docker info                   # Show detailed system-wide info
docker help                   # Show help for Docker
docker <command> --help       # Help for a specific command
```

---

## 🔹 2. Images

```bash
docker images                   # List local images
docker image ls                 # Same as docker images
docker pull <image>             # Download image from registry
docker push <image>             # Upload image to registry
docker build -t <name>:<tag> .  # Build image from Dockerfile
docker rmi <image>              # Remove an image
docker image prune              # Remove unused images
docker tag <src> <target>       # Tag image with new name
```

---

## 🔹 3. Containers (Lifecycle)

```bash
docker ps                     # List running containers
docker ps -a                  # List all containers (including stopped)
docker run <image>            # Run container from image
docker run -it <image> bash   # Run container interactively with shell
docker run -d <image>         # Run container in background
docker start <container>      # Start existing container
docker stop <container>       # Stop running container
docker restart <container>    # Restart container
docker pause <container>      # Pause container processes
docker unpause <container>    # Resume container processes
docker kill <container>       # Kill running container
docker rm <container>         # Remove stopped container
docker container prune        # Remove all stopped containers
```

---

## 🔹 4. Container Access & Monitoring

```bash
docker logs <container>            # View container logs
docker logs -f <container>         # Follow container logs
docker exec -it <container> sh     # Run shell inside container
docker exec -it <container> bash   # Run bash inside container
docker top <container>             # Show processes in container
docker stats                       # Resource usage of containers
docker inspect <container>         # Detailed container info (JSON)
```

---

## 🔹 5. Networking

```bash
docker port <container>                      # List container’s port mappings
docker network ls                            # List networks
docker network inspect <net>                 # Inspect network details
docker network create <net>                  # Create custom network
docker network connect <net> <container>     # Connect container to network
docker network disconnect <net> <container>  # Disconnect container
docker network rm <net>                      # Remove a network
docker network prune                         # Remove unused networks
```

---

## 🔹 6. Volumes & Storage

```bash
docker volume ls              # List volumes
docker volume create <vol>    # Create volume
docker volume inspect <vol>   # Inspect volume
docker volume rm <vol>        # Remove volume
docker volume prune           # Remove unused volumes
```

---

## 🔹 7. Docker Compose (multi-container)

```bash
docker compose up             # Start services (foreground)
docker compose up -d          # Start services (detached)
docker compose down           # Stop and remove services
docker compose ps             # List services
docker compose logs           # View logs
docker compose build          # Build images
docker compose restart        # Restart services
```

---

## 🔹 8. Cleaning Up

```bash
docker system df              # Show disk usage
docker system prune           # Remove unused data (containers, networks, images)
docker system prune -a        # Aggressive cleanup (everything unused)
docker builder prune          # Remove unused build cache
```

---

## 🔹 9. Misc & Advanced

```bash
docker save -o <file>.tar <image>     # Save image to tar archive
docker load -i <file>.tar             # Load image from tar archive
docker export <container> > file.tar  # Export container filesystem
docker import file.tar <image>        # Import as image
docker cp <container>:/path/file ./   # Copy from container to host
docker cp ./file <container>:/path    # Copy from host to container
docker rename <old> <new>             # Rename container
```

---

✅ With these, can cover **95% of daily Docker use cases** — building, running, debugging, cleaning, networking, and storage.