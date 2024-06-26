FROM ubuntu:20.04 as builder

# Install any needed packages
RUN apt-get update && \
  apt-get install --no-install-recommends -y build-essential curl git gnupg ca-certificates

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install --no-install-recommends -y nodejs && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*
RUN npm install yarn -g
RUN apt-get update && \
  apt-get install -y python3 python3-pip
RUN pip3 install scipy

WORKDIR /usr/src/sme

# Move source files to docker image
COPY . .

# Install dependencies
RUN yarn && yarn build

# Run
ENTRYPOINT yarn cli start
