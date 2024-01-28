<template>
  <div class="login-page">
    <div class="left-section">
      <!-- Background Image -->
      <img src="@/assets/images/auth-bg.jpg" alt="login background" class="bg-image" />
      <!-- /Background Image -->
      <div class="overlay-content">
        <h2>{{ $t('login.overlay.title') }}</h2>
        <p>{{ $t('login.overlay.details') }}</p>
      </div>
    </div>
    <div class="right-section">
      <!-- Login Form -->
      <div class="row login">
        <div class="col-md-12">
          <h3 class="login-heading">{{ $t('login.title') }}</h3>

          <div class="login-option">
            <div class="google-login">
              <button class="login-button">
                <IconsGoogle />
                <span class="label">{{ $t('login.google') }}</span>
              </button>
            </div>
          </div>
          <div class="login-option">
            <div class="github-login">
              <button class="login-button">
                <IconsGithub />
                <span class="label">{{ $t('login.github') }}</span>
              </button>
            </div>
          </div>
          <p class="or-text">{{ $t('login.or') }}</p>

          <LoginForm />

          <!-- Signup link-->
          <p class="signup-link">
            {{ $t('login.noAccount') }}
            <nuxt-link to="/signup">{{ $t('signup.label') }} </nuxt-link>
          </p>
          <!-- /Signup link-->
        </div>
      </div>
      <!-- /Login Form -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
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

  .login {
    align-items: center;
    display: flex;
    justify-content: center;

    .login-heading,
    .or-text,
    .signup-link {
      text-align: center;
    }

    .login-heading {
      margin-bottom: 2rem;
    }

    .login-option {
      margin-top: 1rem;
      padding: 0.6rem 5rem;

      border: 2px solid $dark;
      border-radius: 8px;

      .google-login,
      .github-login {
        .login-button {
          align-items: center;
          display: inline-flex;

          gap: 1rem;

          cursor: pointer;
          text-decoration: none;

          .label {
            font-weight: 600;
          }
        }
      }
    }
  }

  .or-text,
  .signup-link {
    margin-top: 1rem;
  }
}
</style>
