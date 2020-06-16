FROM registry.access.redhat.com/ubi8/ubi:latest as development
RUN yum --disableplugin=subscription-manager -y install unzip
ENV DENO_INSTALL="/usr/local/deno"
ENV PATH="${DENO_INSTALL}/bin:/root/.deno/bin:${PATH}"
WORKDIR /app
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.1.0/denon.ts
ENV PATH="/root/.deno/bin:${PATH}"
COPY src src

FROM development
CMD deno run --allow-http src/serve.ts
