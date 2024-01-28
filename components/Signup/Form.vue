<template>
  <!-- Signup Form -->
  <form class="signup-form" @submit.prevent="">
    <div class="form-group">
      <input class="form-control text" type="text" placeholder="Full Name" />
      <input class="form-control email" type="email" placeholder="Email" />
      <input class="form-control password" type="password" placeholder="Password" />
      <button class="form-control signup-button">{{ $t('signup.label') }}</button>
    </div>
  </form>
  <!-- /Signup Form -->
</template>

<style lang="scss" scoped>
.signup-form {
  .text,
  .email,
  .password {
    border: 2px solid $dark;
    border-radius: 8px;
    padding: 0.6rem;

    text-decoration: none;
  }

  .email,
  .password {
    margin-top: 1rem;
  }

  .signup-button {
    margin-top: 2rem;
    padding: 0.6rem;

    background-color: $dark;
    color: $white;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
