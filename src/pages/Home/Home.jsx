import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Container, HomeLink, HomeTitle } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section>
      <Container>
        {isLoggedIn ? (
          <HomeTitle>Thank you! Now you can add your contacts!</HomeTitle>
        ) : (
          <HomeTitle>
            Welcome, dear Guest! Please,{' '}
            <HomeLink to="register">Sign up</HomeLink> or{' '}
            <HomeLink to="login">Log in</HomeLink>.
          </HomeTitle>
        )}
      </Container>
    </section>
  );
};

export default Home;
