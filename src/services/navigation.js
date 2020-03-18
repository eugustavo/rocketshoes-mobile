import { NavigationAction } from '@react-navigation/native';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationAction.navigate({
      routeName,
      params,
    })
  );
}

function back() {
  navigator.dispatch(NavigationAction.back());
}

export default {
  navigate,
  back,
  setNavigator,
};
