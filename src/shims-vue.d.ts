import { Router } from "vue-router";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $go: (path: string) => Router;
  }
}
