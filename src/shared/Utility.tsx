import { AxiosError } from "axios";
import NotFoundImage from "../assets/png/not_found.png";
import ForbiddenImage from "../assets/png/forbidden.png";
import problemImage from "../assets/png/problem.png";
import unAuthorizedImage from "../assets/png/unauthorized.png";
import serverErrorImage from "../assets/png/server_error.png";
import SomethingWentWrongImage from "../assets/png/something_went_wrong.png";

export const getHandledErrorMessage = (error: AxiosError) => {
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 400:
        return {
          status: true,
          image_alt: "problem_with_your_request",
          image: problemImage,
          message:
            "Sorry, we encountered a problem with your request. Please check your input.",
        };
      case 401:
        return {
          status: true,
          image_alt: "authorized_to_access_this_information",
          image: unAuthorizedImage,
          message:
            "Oops, you are not authorized to access this information. Please verify your credentials.",
        };
      case 403:
        return {
          status: true,
          image_alt: "resource_is_forbidden",
          image: ForbiddenImage,
          message:
            "Access to this resource is forbidden. Please ensure you have the necessary permissions.",
        };
      case 404:
        return {
          status: true,
          image_alt: "information_you_requested_is_not_available",
          image: NotFoundImage,
          message:
            "Oops, it seems like the information you requested is not available. Please verify your location or try a different search.",
        };
      case 500:
        return {
          status: true,
          image_alt: "encountered_an_unexpected_error",
          image: serverErrorImage,
          message:
            "Oops, the server encountered an unexpected error. Please try again later.",
        };
      default:
        return {
          status: true,
          image_alt: "something_went_wrong",
          image: SomethingWentWrongImage,
          message:
            "Oops, something went wrong on our end. Please try again later.",
        };
    }
  } else if (error.request) {
    return {
      status: true,
      image: serverErrorImage,
      image_alt: "check_your_network_connection",
      message:
        "we didn't receive a response from the server. Please check your network connection and try again.",
    };
  } else {
    return {
      status: true,
      image_alt: "something_went_wrong",
      image: SomethingWentWrongImage,
      message: "Oops, something went wrong. Please try again later.",
    };
  }
};
