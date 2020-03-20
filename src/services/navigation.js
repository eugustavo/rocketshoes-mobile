import { CommonActions } from '@react-navigation/native';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    })
  );
}

function navigateBack() {
  navigator.dispatch(CommonActions.back());
}

export default {
  navigate,
  navigateBack,
  setNavigator,
};
