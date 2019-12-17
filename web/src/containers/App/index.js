import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withCookies } from 'react-cookie';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import AppWrapper from './AppWrapper';
import Navigation from '../Navigation';
import Loading from '../../components/Loading';
import AuthRoute from './AuthRoute';
import AccountRoute from './AccountRoute';

const HomePage = lazy(() => import('../HomePage'));
const NewPostPage = lazy(() => import('../NewPostPage'));
const EditPostPage = lazy(() => import('../EditPostPage'));
const PostDetailPage = lazy(() => import('../PostDetailPage'));
const HashTagPage = lazy(() => import('../HashTagPage'));
const SettingPage = lazy(() => import('../SettingPage'));
const UserPage = lazy(() => import('../UserPage'));
const EditProfilePage = lazy(() => import('../EditProfilePage'));
const ChangePasswordPage = lazy(() => import('../ChangePasswordPage'));
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
    title: '비밀번호 변경',
    url: 'change/password',
    PageComponent: ChangePasswordPage,
  },
  {
    title: '새 어플리케이션 등록',
    url: 'applications/register',
    PageComponent: RegisterAppPage,
  },
];

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

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
      <ThemeProvider
        theme={{
          palette: {
            background: '#FAFAFA',
            secondary: '#6C757D',
            light: '#F8F9FA',
            gray_bright: '#F5F5F5',
            gray_font: '#999999',
            border: '#e6e6e6',
            border_secondary: '#dbdbdb',
            white: '#FFFFFF',
            blue: '#3897F1',
            blue_facebook: '#375184',
            pink: '#ee4957',
          },
        }}
      >
        <AuthRoute path="/" data={data}>
          <Navigation myInfo={myInfo} />
          <Suspense fallback={<Loading size={50} />}>
            <Switch>
              <Route path="/" exact component={HomePage} />
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
              <Route
                path="/:username"
                exact
                render={props => <UserPage {...props} myInfo={myInfo} />}
              />
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
