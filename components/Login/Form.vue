<template>
  <!-- Login Form -->
  <form class="login-form" @submit.prevent="">
    <div class="form-group">
      <input class="form-control email" type="email" placeholder="Email" />
      <input class="form-control password" type="password" placeholder="Password" />
      <button class="form-control button">{{ $t('login.label') }}</button>
    </div>
  </form>
  <!-- /Login Form -->
</template>

<style lang="scss" scoped>
.login-form {
  .email,
  .password {
    border: 2px solid $dark;
    border-radius: 8px;
    padding: 0.6rem;

    text-decoration: none;
  }

  .password {
    margin-top: 1rem;
  }

  .button {
    margin-top: 2rem;
    padding: 0.6rem;

    background-color: $dark;
    color: $white;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
