FROM mcr.microsoft.com/devcontainers/javascript-node

RUN apt-get update && apt-get install -y bash curl vim && curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh' | bash \
&& apt-get update && apt-get install -y infisical