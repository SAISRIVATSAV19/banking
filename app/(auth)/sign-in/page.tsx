import React from 'react';
import AuthForm from '@/components/AuthForm'; // Ensure AuthForm is correctly imported

const SignIn = () => {
  return (
    <section className='flex -center size-full max-sm:px-6'>
      <form>
        <AuthForm type="sign-in" />
      </form>
    </section>
  );
}

export default SignIn;
