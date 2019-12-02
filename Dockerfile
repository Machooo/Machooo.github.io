FROM centos:7.4.1708



RUN yum -y install openssl
RUN rpm -ivh http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.12.1-1.el7.ngx.x86_64.rpm \
    && yum -y install nginx \
    && nginx -v
COPY docker/default.conf /etc/nginx/conf.d/default.conf



RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash - \
    && yum -y install nodejs \
    && npm install -g yarn

RUN yum -y install bzip2
RUN npm config set unsafe-perm=true \
    && npm config set strict-ssl false \
    && yarn config set strict-ssl false

RUN npm install -g firebase-tools



WORKDIR /var/www/html

EXPOSE 80
CMD nginx -g "daemon off;"
