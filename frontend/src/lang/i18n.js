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

      // title
      "title": {
        "slide1_line1": "취미가",
        "slide1_line2": "시작되는 하루,",
        "slide1_line3": "1:D CLASS",
        "slide1_alt": "취미 클래스 소개 이미지 1",

        "slide2_line1": "1일, 1클래스.",
        "slide2_line2": "당신만의 취향을",
        "slide2_line3": "찾는 시간",
        "slide2_alt": "취미 클래스 소개 이미지 2",

        "slide3": "지금, 나를 위한 시간을 열어보세요",
        "slide3_alt": "취미 클래스 소개 이미지 3"
      },

      // search
      "search": {
        "placeholder": "클래스를 검색해보세요"
      },

      "alert": {
        "fillAllFields": "모든 항목을 입력해주세요.",
        "loginSuccess": "로그인 되었습니다.",
        "serverError": "서버 오류가 발생했습니다.",
        "dbError": "데이터베이스 오류가 발생했습니다.",
        "userNotFound": "가입되지 않은 아이디 또는 이메일입니다.",
        "wrongPassword": "비밀번호가 틀렸습니다.",
        "logoutSuccess": "로그아웃 되었습니다.",
        "logoutFail": "로그아웃에 실패했습니다.",
        "logoutError": "로그아웃 중 오류가 발생했습니다."
      },

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
      
      "loading": "로딩 중...",
      "currencyWon": "원",
      "productDetail": {
        "notFound": "상품을 찾을 수 없습니다.",
        "personCount": "1~{{count}}명",
        "placeUnknown": "정보없음",
        "beforeApplyNotice": "※ 클래스 신청 전, 확인해주세요!",
        "person": "인원",
        "faqButton": "FAQ",
        "applyButton": "클래스 신청하기",
        "tabs": {
          "intro": "클래스 소개",
          "curriculum": "커리큘럼",
          "tutor": "튜터 소개",
          "reviews": "후기"
        }
      },

      "section1": {
        "title": "클래스 소개",
        "paragraphs": [
          "손으로 만드는 첫 장난감, 우리 강아지에게<br />세상에서 단 하나뿐인 장난감을,<br />내 손으로 직접 만들어 강아지에게 선물해보세요.<br />바느질이 서툴러도 괜찮아요.",
          "폭신한 원단과 안전한 소재로 준비된<br />입문자용 키트를 통해 누구나 쉽게 완성할 수 있어요.",
          "장난감을 만들며 내 반려견을 더 깊이 이해하고,<br />완성 후에는 선물하는 기쁨까지 함께 경험해보세요.<br />우리 아이가 제일 좋아하는 장난감이 될지도 몰라요!"
        ]
      },

      "section3": {
        "title": "튜터 소개",
        "altText": "강사 프로필 사진",
        "name": "펫공방 스튜디오",
        "instagram": "@_petgram",
        "youtube": "펫공방채널",
        "qualification": "✔ 펫푸드 전문가 자격증 (한국반려동물교육협회)",
        "description": "펫공방스튜디오는 경기 교육청 정식 허가 등록(제 5615-1호) 된 반려동물 수제간식 전문학원으로 원데이 클래스부터 취미반, 자격증반, 창업반, 펫베이커리, 펫케이크, 반려동물 자연식, 반려동물 영양관리사, 펫교감카드(펫타로) 등 다양한 수업을 운영하는 한국반려동물교육협회(KCAEA) 본원 입니다."
      },

      "curriculum": {
        "title": "커리큘럼 안내",
        "step1": {
          "label": "STEP1.",
          "title": "클래스 소개 및 아이스브레이킹",
          "desc1": "강사 및 참여자 간 간단한 자기소개",
          "desc2": "강아지 장난감 제작 클래스 개요 설명"
        },
        "step2": {
          "label": "STEP2.",
          "title": "반려견 성향 이해하기 (5분)",
          "desc1": "활동적인 강아지 vs. 조용한 강아지",
          "desc2": "어떤 장난감이 적합할지 간단히 알아보기"
        },
        "step3": {
          "label": "STEP3.",
          "title": "재료 소개 및 도구 사용법 익히기 (10분)",
          "desc1": "안전한 원단, 충전재, 바느질 키트 소개",
          "desc2": "기본 바느질 방법 시연"
        },
        "step4": {
          "label": "STEP4.",
          "title": "장난감 디자인 선택 & 밑그림 그리기 (15분)",
          "desc1": "준비된 디자인 중 선택 or 자유 디자인",
          "desc2": "강아지 이름 자수 위치 등 정하기"
        },
        "step5": {
          "label": "STEP5.",
          "title": "장난감 제작 시작 (60분)",
          "desc1": "재단, 바느질, 충전재 채우기 등 순차적 제작",
          "desc2": "강사의 도움 아래 1:1 코칭 진행"
        },
        "step6": {
          "label": "STEP6.",
          "title": "디테일 마감 및 꾸미기 (15분)",
          "desc1": "자수 넣기, 리본/태그 부착 등",
          "desc2": "완성 후 촬영 포인트 잡기"
        },
        "step7": {
          "label": "STEP7.",
          "title": "완성품 공유 & 포토타임 (10분)",
          "desc1": "서로 만든 장난감 소개",
          "desc2": "반려견 사진 or 완성품 인증샷 촬영"
        },
        "step8": {
          "label": "STEP8.",
          "title": "포장 및 클래스 마무리 (5분)",
          "desc1": "선물 포장지 제공",
          "desc2": "후기 작성 안내 및 다음 클래스 소개"
        }
      },

      "reviewSection": {
        "title": "수강후기",
        "loadMore": "더보기",
        "alt": {
          "fullStar": "꽉 찬 별",
          "emptyStar": "빈 별",
          "profileImage": "프로필 이미지",
          "reviewImage": "후기 이미지"
        }
      },

      "tabNav": {
        "classIntro": "클래스 소개",
        "curriculum": "커리큘럼",
        "tutorIntro": "튜터 소개",
        "reviews": "수강후기"
      },

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

      // title
      "title": {
        "slide1_line1": "A day",
        "slide1_line2": "that starts with a hobby,",
        "slide1_line3": "1:D CLASS",
        "slide1_alt": "Hobby class introduction image 1",

        "slide2_line1": "1 day, 1 class.",
        "slide2_line2": "Find your own taste",
        "slide2_line3": "in this time",
        "slide2_alt": "Hobby class introduction image 2",

        "slide3": "Now, open time just for you",
        "slide3_alt": "Hobby class introduction image 3"
      },

      // search
      "search": {
        "placeholder": "Search for a class"
      },

      "alert": {
        "fillAllFields": "Please fill in all fields.",
        "loginSuccess": "Login successful.",
        "serverError": "Server error.",
        "dbError": "Database error.",
        "userNotFound": "ID or email not registered.",
        "wrongPassword": "Incorrect password.",
        "logoutSuccess": "You have been logged out.",
        "logoutFail": "Failed to log out.",
        "logoutError": "An error occurred during logout."
      },

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

      "loading": "Loading...",
      "currencyWon": "won",
      "productDetail": {
        "notFound": "Product not found.",
        "personCount": "1~{{count}} persons",
        "placeUnknown": "No information",
        "beforeApplyNotice": "※ Please check before applying for the class!",
        "person": "Persons",
        "faqButton": "FAQ",
        "applyButton": "Apply for Class",
        "tabs": {
          "intro": "Class Introduction",
          "curriculum": "Curriculum",
          "tutor": "Tutor Introduction",
          "reviews": "Reviews"
        }
      },

      "section1": {
        "title": "Class Introduction",
        "paragraphs": [
          "Make your dog's very first handmade toy<br />A one-of-a-kind gift just for them,<br />Handcrafted with love by you.<br />Don’t worry if you’re new to sewing.",
          "With soft fabrics and safe materials,<br />Our beginner-friendly kit lets anyone complete it easily.",
          "Deepen your bond while making the toy,<br />Then experience the joy of gifting it.<br />It might become your dog's favorite toy!"
        ]
      },

      "curriculum": {
        "title": "Curriculum Overview",
        "step1": {
          "label": "STEP1.",
          "title": "Class Introduction and Icebreaking",
          "desc1": "Brief self-introduction between instructor and participants",
          "desc2": "Overview of the dog toy making class"
        },
        "step2": {
          "label": "STEP2.",
          "title": "Understanding Dog Temperaments (5 min)",
          "desc1": "Active dogs vs. quiet dogs",
          "desc2": "Briefly explore which toys are suitable"
        },
        "step3": {
          "label": "STEP3.",
          "title": "Introduction to Materials and Tools (10 min)",
          "desc1": "Introduction to safe fabrics, stuffing, and sewing kits",
          "desc2": "Demonstration of basic sewing techniques"
        },
        "step4": {
          "label": "STEP4.",
          "title": "Toy Design Selection & Sketching (15 min)",
          "desc1": "Choose from prepared designs or create your own",
          "desc2": "Decide on dog name embroidery location, etc."
        },
        "step5": {
          "label": "STEP5.",
          "title": "Start Toy Making (60 min)",
          "desc1": "Sequential production: cutting, sewing, stuffing",
          "desc2": "1:1 coaching with instructor’s help"
        },
        "step6": {
          "label": "STEP6.",
          "title": "Detail Finishing and Decoration (15 min)",
          "desc1": "Add embroidery, attach ribbons/tags, etc.",
          "desc2": "Capture key photo points after completion"
        },
        "step7": {
          "label": "STEP7.",
          "title": "Sharing Finished Products & Photo Time (10 min)",
          "desc1": "Introduce the toys made by participants",
          "desc2": "Take photos of your dog or finished products"
        },
        "step8": {
          "label": "STEP8.",
          "title": "Packaging and Class Wrap-up (5 min)",
          "desc1": "Gift wrapping provided",
          "desc2": "Guide for writing reviews and introduce next classes"
        }
      },

      "section3": {
        "title": "Tutor Introduction",
        "altText": "Tutor profile photo",
        "name": "Pet Workshop Studio",
        "instagram": "@_petgram",
        "youtube": "Pet Workshop Channel",
        "qualification": "✔ Pet Food Specialist Certification (Korea Companion Animal Education Association)",
        "description": "Pet Workshop Studio is an officially registered handmade pet treat academy (No. 5615-1, Gyeonggi Office of Education). We offer a variety of classes including one-day classes, hobby courses, certification courses, business start-up classes, pet bakery, pet cakes, natural pet food, pet nutritionist, and pet communication cards (Pet Tarot) as the headquarters of the Korea Companion Animal Education Association (KCAEA)."
      },

      "reviewSection": {
        "title": "Reviews",
        "loadMore": "Load More",
        "alt": {
          "fullStar": "Full star",
          "emptyStar": "Empty star",
          "profileImage": "Profile image",
          "reviewImage": "Review image"
        }
      },

      "tabNav": {
        "classIntro": "Class Introduction",
        "curriculum": "Curriculum",
        "tutorIntro": "Tutor Introduction",
        "reviews": "Reviews"
      },

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
