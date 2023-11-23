<template>
    <div>
      <h1>Webhook Receiver</h1>
      <div v-if="webhookData">
        <pre>{{ webhookData }}</pre>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue';
  import { EventBus } from '@/event-bus';
  
  @Component
  export default class WebhookReceiver extends Vue {
    webhookData: any = null;
  
    mounted() {
      // Escute o evento do Event Bus
      EventBus.$on('webhookReceived', (payload: any) => {
        // Faça algo com os dados recebidos
        this.webhookData = payload;
      });
    }
  }
  </script>
  