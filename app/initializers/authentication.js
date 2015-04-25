import UserSession from '../sessions/user';

export function initialize(container, application) {
  application.register('session:user', UserSession);
}

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: initialize
};
