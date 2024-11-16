import google from "../assets/img/sns/google.png";
import kakao from "../assets/img/sns/kakao.png";
import git from "../assets/img/sns/git.png";
import facebook from "../assets/img/sns/facebook.png";
import naver from "../assets/img/sns/naver.png";

export function getSnsImg(imgName) {
  switch (imgName) {
    case "google":
      return google;
    case "kakao":
      return kakao;
    case "git":
      return git;
    case "facebook":
      return facebook;
    case "naver":
      return naver;
    default:
      return null;
  }
}
