import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      // header
      "title": "원데이 클래스 플랫폼",
      "wishlist": "관심 목록",
      "login": "로그인",
      "mypage": "마이페이지",
      "darkMode": "다크 모드",
      "menu": "메뉴",
      "logout": "로그아웃",

      // mypage
      "mypageTitle": "마이페이지",
      "welcomeMessage": "환영합니다! 로그인한 사용자만 볼 수 있는 임시 마이페이지입니다.",
      "goHome": "홈으로 이동",

      // new
      new: "NEW 클래스",

      // best
      best: "BEST 클래스",

      // card
      won: "원",

      // categories
      categories: {
        pet: "반려동물",
        beauty: "뷰티",
        sports: "스포츠",
        cooking: "쿠킹",
        all: "전체",
      },

      // product
      product_load_fail: "상품 로딩 실패:",
      product_load_fail_default: "상품을 불러오지 못했습니다.",

      // filter
      filter: {
        no_selection: "선택안함",
        category: "카테고리",
        day: "요일",
        level: "난이도",
        person: "인원",
        tag: "태그",
        price: "금액",
        apply: "적용하기",
        reset: "초기화",
        minPrice: "최소금액",
        maxPrice: "최고금액",
      },
      classes: "개의 클래스",
      no_matching_products: "조건에 맞는 상품이 없습니다.",

      // faq
      inquiry: "1:1 문의하기",
      usage: "이용 관련",
      refund: "취소 및 환불 관련",
      class: "클래스 관련",
      menu: "개인 메뉴 관련",
      system: "기타 시스템 및 정책",

      faq: {
        sections: {
          usage: "이용 관련",
          refund: "취소 및 환불 관련",
          class: "클래스 관련",
          menu: "개인 메뉴 관련",
          system: "기타 시스템 및 정책",
        },
        relatedData: [
          {
            question: "회원가입 없이도 예약할 수 있나요?",
            answer:
              "일부 클래스는 비회원도 예약이 가능하지만, 대부분은 회원가입이 필요합니다.",
          },
          {
            question: "클래스는 어떻게 신청하나요?",
            answer:
              "상단 메뉴 또는 검색을 통해 원하는 클래스를 선택 후 신청 가능합니다.",
          },
          {
            question: "결제는 어떤 방식으로 가능한가요?",
            answer:
              "신용카드, 카카오페이, 네이버페이 등 다양한 결제 수단을 지원합니다.",
          },
          {
            question: "예약 내역은 어디서 확인할 수 있나요?",
            answer: "마이페이지 > 예약 내역 메뉴에서 확인하실 수 있습니다.",
          },
        ],
        refundDate: [
          {
            question: "클래스 예약을 취소하고 싶어요.",
            answer:
              "클래스 예약 취소는 예약 페이지에서 가능하며, 취소 정책에 따라 처리됩니다.",
          },
          {
            question: "환불은 언제 받을 수 있나요?",
            answer: "환불은 취소 접수 후 약 3~5영업일 이내에 처리됩니다.",
          },
          {
            question: "당일 취소도 가능한가요?",
            answer:
              "당일 취소는 불가능할 수 있으며, 상세 취소 정책을 참고해 주세요.",
          },
          {
            question: "클래스가 취소되면 어떻게 되나요?",
            answer:
              "클래스 취소 시 별도 안내드리며, 전액 환불 또는 일정 변경 옵션을 제공합니다.",
          },
        ],
        classDate: [
          {
            question: "클래스 소요 시간은 얼마나 되나요?",
            answer:
              "클래스마다 상이하지만 평균적으로 1시간에서 2시간 정도 소요됩니다.",
          },
          {
            question: "준비물이 필요한가요?",
            answer:
              "일부 클래스는 개인 준비물이 필요할 수 있으며, 상세 페이지에서 확인 가능합니다.",
          },
          {
            question: "혼자 참여해도 괜찮을까요?",
            answer:
              "물론입니다. 혼자 오시는 분들도 부담 없이 참여하실 수 있도록 안내해 드립니다.",
          },
          {
            question: "반려동물과 함께 참여할 수 있나요?",
            answer:
              "클래스에 따라 다르며, 반려동물 동반 가능 여부는 클래스 상세 정보에서 확인해 주세요.",
          },
        ],
        menuDate: [
          {
            question: "관심 있는 클래스를 저장할 수 있나요?",
            answer:
              "네, 클래스 상세 페이지에서 찜하기 버튼을 눌러 관심 클래스로 저장할 수 있습니다.",
          },
          {
            question: "내가 찜한 클래스는 어디에서 볼 수 있나요?",
            answer: "마이페이지 > 찜한 클래스 메뉴에서 확인하실 수 있습니다.",
          },
          {
            question: "수강 완료한 클래스는 따로 표시되나요?",
            answer:
              "네, 수강 완료한 클래스는 마이페이지 내 이력에서 별도로 표시됩니다.",
          },
        ],
        sysDate: [
          {
            question: "운영시간은 어떻게 되나요?",
            answer:
              "클래스별로 운영시간이 다르며, 상세 페이지에서 확인 가능합니다. 일반적으로 오전 10시부터 오후 8시까지 운영됩니다.",
          },
          {
            question: "리뷰는 어떻게 작성하나요?",
            answer:
              "수강 완료 후 마이페이지 > 수강 내역에서 해당 클래스에 리뷰를 작성하실 수 있습니다.",
          },
          {
            question: "업체로 직접 문의하고 싶어요.",
            answer:
              "클래스 상세 페이지 하단에 있는 문의하기 버튼을 통해 업체에 직접 문의하실 수 있습니다.",
          },
          {
            question: "쿠폰이나 포인트는 어떻게 사용하나요?",
            answer:
              "결제 단계에서 보유 중인 쿠폰과 포인트를 적용할 수 있는 옵션이 제공됩니다.",
          },
        ],
      },

      // wishlist
      wishList: {
        "title": "관심 있는 클래스",
        "description": "언젠가 해보고 싶은 클래스를 모아봤어요.",
        "emptyMessage1": "아직 찜한 클래스가 없어요!",
        "emptyMessage2": "마음에 드는 클래스를",
        "emptyMessage2Span": "눌러 담아보세요.",
        "browseBtn": "클래스 둘러보기"
      },

      // footer
      footertitle: "감성을 담은 원데이 클래스 플랫폼입니다.",
      footerhelp: "도움이 필요하신가요?",
      footertime: "평일: 10:00 ~ 20:00 (주말, 공휴일 제외)",
      faqinquiry: "FAQ / 1:1 문의",

      // login
      logintitle: "로그인하고 나에게 딱 맞는<br />클래스를 만나보세요",
      emailOrIdPlaceholder: "아이디 또는 이메일",
      passwordPlaceholder: "비밀번호",
      forgotLink: "이메일/비밀번호 찾기",
      loginButton: "로그인",
      notMemberQuestion: "아직 회원이 아니신가요?",
      signupLink: "회원가입",

      // sign
      signTitle: "회원가입 페이지",
      emailPlaceholder: "이메일",
      useridPlaceholder: "아이디",
      passwordPlaceholder: "비밀번호",
      confirmPasswordPlaceholder: "비밀번호 확인",
      signUpButton: "회원가입",
      alreadyMemberQuestion: "이미 회원이신가요?",
      loginLink: "로그인",
    },
  },
  en: {
    translation: {
      // header
      "title": "1:D Class",
      "wishlist": "Wish List",
      "login": "Login",
      "mypage": "My Page",
      "darkMode": "Dark Mode",
      "menu": "Menu",
      "logout": "Logout",

      // mypage
      "mypageTitle": "My Page",
      "welcomeMessage": "Welcome! This is a temporary My Page for logged-in users only.",
      "goHome": "Go to Home",

      // new
      new: "NEW Class",

      // best
      best: "BEST Class",

      // card
      won: "Won",

      // categories
      categories: {
        pet: "Pet",
        beauty: "Beauty",
        sports: "Sports",
        cooking: "Cooking",
        all: "All",
      },

      // product
      product_load_fail: "Failed to load products:",
      product_load_fail_default: "Could not load products.",

      // filter
      filter: {
        no_selection: "No selection",
        category: "Category",
        day: "Day",
        level: "Level",
        person: "Person",
        tag: "Tag",
        price: "Price",
        apply: "Apply",
        reset: "Reset",
        minPrice: "Min Price",
        maxPrice: "Max Price",
      },
      classes: "classes",
      no_matching_products: "No matching products.",

      // faq
      inquiry: "1:1 Inquiry",
      usage: "Usage",
      refund: "Cancellation & Refund",
      class: "Class Related",
      menu: "Personal Menu",
      system: "Other System & Policy",

      faq: {
        sections: {
          usage: "Usage",
          refund: "Cancellation & Refund",
          class: "Class Related",
          menu: "Personal Menu",
          system: "Other System & Policy",
        },
        relatedData: [
          {
            question: "Can I book without signing up?",
            answer:
              "Some classes allow booking without membership, but most require signing up.",
          },
          {
            question: "How do I apply for a class?",
            answer:
              "You can select and apply for the desired class via the top menu or search.",
          },
          {
            question: "What payment methods are available?",
            answer:
              "Various payment methods such as credit card, KakaoPay, and NaverPay are supported.",
          },
          {
            question: "Where can I check my reservation history?",
            answer:
              "You can check it under My Page > Reservation History menu.",
          },
        ],
        refundDate: [
          {
            question: "I want to cancel a class reservation.",
            answer:
              "Class cancellations can be made on the reservation page and are handled according to the cancellation policy.",
          },
          {
            question: "When will I receive a refund?",
            answer:
              "Refunds are processed within about 3-5 business days after cancellation.",
          },
          {
            question: "Is same-day cancellation possible?",
            answer:
              "Same-day cancellations may not be possible; please check detailed cancellation policies.",
          },
          {
            question: "What happens if the class is canceled?",
            answer:
              "You will be notified separately, and a full refund or rescheduling option will be provided.",
          },
        ],
        classDate: [
          {
            question: "How long does a class last?",
            answer: "Duration varies, but generally classes last 1 to 2 hours.",
          },
          {
            question: "Do I need to bring any materials?",
            answer:
              "Some classes may require personal materials; check the details page.",
          },
          {
            question: "Can I participate alone?",
            answer:
              "Of course. We welcome individuals to participate comfortably.",
          },
          {
            question: "Can I participate with my pet?",
            answer:
              "Depends on the class; please check pet policy on class detail page.",
          },
        ],
        menuDate: [
          {
            question: "Can I save classes I am interested in?",
            answer:
              "Yes, you can save classes by clicking the wishlist button on the class detail page.",
          },
          {
            question: "Where can I see my saved classes?",
            answer: "You can view saved classes in My Page > Wishlist menu.",
          },
          {
            question: "Are completed classes marked separately?",
            answer:
              "Yes, completed classes are marked separately in your history.",
          },
        ],
        sysDate: [
          {
            question: "What are the operation hours?",
            answer: "Operation hours vary by class, usually from 10AM to 8PM.",
          },
          {
            question: "How do I write a review?",
            answer:
              "After completing a class, you can write reviews in My Page > Completed Classes.",
          },
          {
            question: "Can I contact the business directly?",
            answer:
              "Yes, use the inquiry button at the bottom of the class detail page.",
          },
          {
            question: "How do I use coupons or points?",
            answer: "You can apply coupons or points during the payment step.",
          },
        ],
      },

      // wishlist
      wishList: {
        title: "Classes You Are Interested In",
        description: "We've gathered classes you'd like to try someday.",
        emptyMessage1: "You haven't added any classes to your wishlist yet!",
        emptyMessage2: "Click",
        emptyMessage2Span: "to add your favorite classes.",
        browseBtn: "Browse Classes",
      },

      // footer
      footertitle: "A one-day class platform capturing emotion.",
      footerhelp: "Do you need help?",
      footertime:
        "Weekdays: 10:00 AM - 8:00 PM (Closed on weekends and holidays)",
      faqinquiry: "FAQ / 1:1 Inquiry",

      // login
      logintitle: "Log in and find the class<br />that’s just right for you",
      emailOrIdPlaceholder: "ID or Email",
      passwordPlaceholder: "Password",
      forgotLink: "Find Email/Password",
      loginButton: "Log In",
      notMemberQuestion: "Not a member yet?",
      signupLink: "Register",

      // sign
      signTitle: "Sign Up Page",
      emailPlaceholder: "Email",
      useridPlaceholder: "Username",
      passwordPlaceholder: "Password",
      confirmPasswordPlaceholder: "Confirm Password",
      signUpButton: "Register",
      alreadyMemberQuestion: "Already a member?",
      loginLink: "Log In",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
