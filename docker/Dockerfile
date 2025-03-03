FROM node:23.9.0-slim AS node
FROM php:8.4-fpm

ARG user
ARG uid

RUN apt update && apt install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip
RUN apt clean && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install pdo pdo_pgsql pgsql pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# copy nodejs
COPY --from=node --chown=$user:$user /usr/local/bin /usr/local/bin
# copy npm
COPY --from=node --chown=$user:$user /usr/local/lib/node_modules /usr/local/lib/node_modules

ENV NODE_PATH /usr/local/lib/node_modules

RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user && \
    chown -R $user:$user /usr/local/lib/node_modules

WORKDIR /var/www

USER $user

RUN npm install -g chokidar
