import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withCookies } from 'react-cookie';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import AppWrapper from './AppWrapper';
import Navigation from '../Navigation';
import Loading from '../../../components/before/Loading';
import AuthRoute from './AuthRoute';
import AccountRoute from './AccountRoute';
import MyAppPage from '../MyAppPage';
import { IS_LOGGED_IN } from '../../../queries';
import { MainPage } from '../../../pages';
import theme from '../../../styles/theme';

const HomePage = lazy(() => import('../HomePage'));
const NewPostPage = lazy(() => import('../NewPostPage'));
const EditPostPage = lazy(() => import('../EditPostPage'));
const PostDetailPage = lazy(() => import('../PostDetailPage'));
const HashTagPage = lazy(() => import('../HashTagPage'));
const SettingPage = lazy(() => import('../SettingPage'));
const UserPage = lazy(() => import('../UserPage'));
const EditProfilePage = lazy(() => import('../EditProfilePage'));
const RegisterAppPage = lazy(() => import('../RegisterAppPage'));
const SignInPage = lazy(() => import('../AccountPage/SignIn'));
const SignUpPage = lazy(() => import('../AccountPage/SignUp'));

const settingPageList = [
  {
    title: '프로필 편집',
    url: 'edit/profile',
    PageComponent: EditProfilePage,
  },
  {
    title: '내 어플리케이션',
    url: 'show/applications',
    PageComponent: MyAppPage,
  },
  {
    title: '새 어플리케이션 등록',
    url: 'register/applications',
    PageComponent: RegisterAppPage,
  },
];

function App({ cookies }) {
  const client = useApolloClient();
  const myInfo = cookies.get('myInfo');
  client.writeData({
    data: {
      isLoggedIn: !!myInfo,
    },
  });
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <AuthRoute path="/" data={data}>
          <Navigation />
          <Suspense fallback={<Loading size={50} />}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/new/post" exact component={NewPostPage} />
              <Route
                path="/edit/:postURL"
                exact
                component={props => <EditPostPage {...props} myInfo={myInfo} />}
              />
              <Route path="/p/:postURL" exact component={PostDetailPage} />
              <Route path="/h/:hashTag" exact component={HashTagPage} />
              <Route
                path="/setting"
                component={props => (
                  <SettingPage {...props} pageList={settingPageList} />
                )}
              />
              <Route path="/:username" exact component={UserPage} />
            </Switch>
          </Suspense>
        </AuthRoute>
        <AccountRoute path="/account" data={data}>
          <Suspense fallback={<Loading size={50} />}>
            <Route
              path="/account/signin"
              exact
              render={props => <SignInPage {...props} />}
            />
            <Route
              path="/account/signup"
              exact
              render={props => <SignUpPage {...props} />}
            />
          </Suspense>
        </AccountRoute>
      </ThemeProvider>
    </AppWrapper>
  );
}

export default withCookies(App);
