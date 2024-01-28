<template>
  <div class="signup-page">
    <div class="left-section">
      <!-- Background Image -->
      <img src="@/assets/images/auth-bg.jpg" alt="signup background" class="bg-image" />
      <!-- /Background Image -->

      <div class="overlay-content">
        <h2>{{ $t('login.overlay.title') }}</h2>
        <p>{{ $t('login.overlay.details') }}</p>
      </div>
    </div>
    <div class="right-section">
      <!-- Signup Form -->
      <div class="row signup">
        <div class="col-md-12">
          <h3 class="signup-heading">{{ $t('signup.title') }}</h3>
          <SignupForm />

          <!-- Login link-->
          <p class="signup-link">
            {{ $t('signup.haveAccount') }}
            <nuxt-link to="/login">{{ $t('login.label') }} </nuxt-link>
          </p>
          <!-- /Login link-->
        </div>
      </div>
      <!-- /Signup Form -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signup-page {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.left-section {
  flex: 1;
  position: relative;
  overflow: hidden;

  background-color: darkslategray;

  @include respond-below('small') {
    display: none;
  }

  .bg-image {
    background-size: cover;
    object-fit: cover;
    height: 56rem;
    filter: brightness(0.2);
  }

  .overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
  }
}

.right-section {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;

  .signup {
    align-items: center;
    display: flex;
    justify-content: center;

    .signup-heading,
    .signup-link {
      text-align: center;
    }

    .signup-heading {
      margin-bottom: 2rem;
      padding: 0.6rem 3.6rem;
    }
  }

  .signup-link {
    margin-top: 1rem;
  }
}
</style>
