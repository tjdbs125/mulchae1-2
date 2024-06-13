const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihVGhVYuHlz3noXLuxXCjKWj2ji5r0iXOqjRz-BhjlsUUWmVD7xbieOyUdvhxwjdue8lvF0MAARPPZBBMCI7hrH8d6Ihc2zqP1DmoUYltrfx_yAiJY7HPmBaPjlQcEoClwDVu10YjarYtIDvqRc3kz4SMe6MOMJnyjMO0ZmXCbgfwdwZNG7UDhci6amso5/s776/KakaoTalk_20240531_151835582.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirN67ojsFSqXQTeq8vvafzrsnq41CmdOeb_Slf35KtDcN5-dnZUIvmyGG0G_dQ9W1wcw6EigtSNhu8vzufDizsnNb4WGtDUFlONbbnlTVs4JElJc6ZaXqgkbaC_hOGGgMOwOlICu1FFI0WSmZXyLv5EyMllSL7Qth5GqSTu6SiNCQP1BYEBu3-FdxXOH6l/s586/KakaoTalk_20240614_004220177.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA4ObyAq00p-K14ljSTsHfaDXc5B2l9qhGRiY6L_3Cow0_vmkBx6fap7I9JoXsBju7vknZh_owRshFZm33F6vyBaCVQGn40SuRiFPR-8-PReQao0gh4nd3DDS8ka8qh_5CWgF5lhe7GUANv7M06jgTyo6gXTJWoet6FRn34oBQF5tXjJmQIfkQd6STwH1G/s784/KakaoTalk_20240531_151835582_01.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsg0yIQ3YhJPZ5Oqpm5wtKW_ORGpdK2SPSbseVeR9bCem_IauPoQ7lRU0djzl4Dq1XYnQmRIWejr_pCd3F4BzDOwnLqpkp1Vem5eP1MixaECVBzZaqtu7BjwSZCHFUcVw6rnoOiLnysibbJGLYEhc6a9mruKs84IkjrMoih_QTZFzqPsk3oMH0OsgdDvp3/s571/KakaoTalk_20240614_004220177_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBAhM4v1JVzO5QMImqoi7vYSelV6ZUGTv9tv50Np9YqUQTaLkd-XsVn2JI6SSkdSvULnOKQmBGV8JFwgLipzhl_EmlR3nKBkbHcGkd9CMQcTtmaOwAO5fsAS9HY6g8T5pDmbqrURKSulZaAln2zKjqIiqhmquAbdKcVMD3vCye1-IC48v_MInEtT5M1d9X/s628/KakaoTalk_20240531_151835582_02.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl_PS6RxLCpOn1WTk61MrSxslrDVyGsZID92-b_1MQSJYqFDhVS8_zjd4vBJf5zl8I5r3WJsnjKYYO-2P91FsoQqYm2jmcqheEl1OXymGbi5KfQPGwMPVjq9Zxb54uE_vloG2Z2KDXPyPjyjURD9LLeysOq1TYhY7tUrJhrojUby8igV5b4wWyh7ECx8wl/s580/KakaoTalk_20240614_004220177_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP3GynDp7IBR75QDtc26kxNoeRDIpgN_WE3VRqavLWAR8wgQI_FoATcfL0tP8W1CcpZ_BK26XCh5BM-F8B9ZZ2Vhh27rjvUbORwdv8JBefk2-V2iVPhitHD0usZhEoEUufbWLQUuqZWftO3j8UQambm2291tJC3gu4SMgtMCx6Usi7A0Gw_ShqUHLWTw95/s814/KakaoTalk_20240531_151835582_03.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqZezfoqA6_AYluLRwm6HfIycbb-Z58KpCrV-T4R10A1g9YR16exIfe2z4DTtE_vpv6RBBbr_fw6-V6y7KbRv6M12LU_SsnMRuEKX5rU3kMlFNZnuUiYgDjEfGssRhuzoUz36_ZI9BF931QAQwm-zDgVDDK0SMn-I6H0dquyZdtofD6qLrwT1NlY4HC_WS/s542/KakaoTalk_20240614_004220177_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVZTEQ72RYreHXIo9D00eo5R5DnTjsiy0DshKCGJBVgazI6NKHpOhVOc1eP7TVCumVF19VMTHFA3Vl_d13eBCtoPPwIcrehJnY8TqImgwR5_JOLXp8cf6B63iFtxeXleEVwYx8Mwz8aJkrkHq_sc7zBx3wte8vuYKBQIFPT7SKzOu41DCkV3SEv5d9Rhc3/s873/KakaoTalk_20240531_151835582_04.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHuI-CSFKxm1awPTZSLo_NtdMG4lV7HQIWHZaB85A0PcZGLYRvJrfBbByX_875e5wyoUVvUZd5431L9CzS_p52SVqmMYWNztfg0LYNsrrC-6uxn75p-04CQloMtmqYDocNYKZ7fRiv1o5mnABhr6-2P-O4EZ50W6v9rZXhEwG9MbFLx-7JEBzJ4mJg93PI/s568/KakaoTalk_20240614_004220177_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfTSvxIo-lUBUwGwIG-XUxooUvpBH4FCFA9hwboQ49eRHIWZjQ4g9xkJ86SPTs_yuCwNTdQ63GtGl6vX1NzvhitZohV7YUh_E1znuEPbpwoS03BVmQ3kCrbAZ9GEL6MPO0MmzGPHMnHluCJihqK7QigNzHNnwkwy0cWce6n_opfoROsjz5C1izT5wGPC1F/s682/KakaoTalk_20240531_151835582_05.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj0QQ-k27gFooDNo7nBMcJ7HfXFFB4Rf4oLSTN759jJtWEOa-cZGA5pF6l2BCR5h5YD234HT1g7sJ-ZDN-gDUFOpo5lJU5tcuRPm-DzQq_bQqSVtciunp1jW9Ksrxnc7TnV-_7JwwGqPLdoZcs60Ty6FSBTFwHQsa96cGEJ22OwR0rqalEhNdWJMbHGtgM/s566/KakaoTalk_20240614_004220177_05.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9xswlIOMg7bRH4vm_x44JCl7zycnoU6fXyLMO2K54kv4ErgyNMqWtWCPrz7eXlfGIl58BvRe5OJM57AddGfbnFJTISJdpleAzvcFefh9C3S95MhvHbcsiZY7EBBCo3-8tnAw3DszEm1Dt2V-hN2HvYwWTgRAyoJOJ1ilSXm2TPmIrwMZDmMmQ-XH1XJ0s/s802/KakaoTalk_20240531_151835582_06.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyF6X0nK5a9CoWgD_QJY1ouRWc5hExz6f55vhulm2Dt8Wtmsze4Iqsqr-ff8LKV90tvlh5PmJtNGZ9qViZnvF-V9fywOYG_yMqauc6WWRuVqohcSCl-_iPspp6ZF54EHBV1ln78vxzLrdF_ScvG8XB90vOLOrNHVXl2_xc8P-lp3QH7GOwRTbes9dTaQgV/s565/KakaoTalk_20240614_004220177_06.jpg",
        selectedAnswer: null
    },    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh-yw2PRcRZSJAwoGsrqjC1-IS9ZjsDWGIe9FJhWqK_C8YUXwlzHqdX7m6_kjAHrbt3RHPevS4iiO3HWrFmqt8r-qfEtc07pm4DZwOwz4sajYKq3P4dxAGi6bpFEkTp-LUxJ7eLGxolzJJffgCsNEtTeRPn_AC_VklGuoZ3GixbOE_yXyAe2GJz0OkD_NT/s714/KakaoTalk_20240531_151835582_07.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwPeTJkIp74VIA6NqF1AjxlfrHMXVaq_1uNIewnv2GkFtaIo_2l7eMlCJinlqh5e32AToJvViH7T8gkJpEHeY2gRMOB3-zilkaAOb93Irn4c5zbQ5mLI7hv9Mhfk5lvk_cP2_fuaXmLCFIWKX0pQ2JmzS20uQFCYzILIMdGUTxUbnYY4XgWgOuCFQGdk0J/s582/KakaoTalk_20240614_004220177_07.jpg",
        selectedAnswer: null
    },    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ-gGMmw883j-v4CoE7th_bV2BW8S6ORuTrsrRI2PmTJbwGniV28ZutkR8oHmd7N6XG-rOUJMVwpzbik1nEF3Mw3TNGZ6fXZ1LQrA8DbWOCqy-F7AmjzHN8MhOnMQURwzY9D3pQ1vRJxK6qUaQ2IN2dkTIM2OJxhkd1aKuT63Q33_hyphenhyphenmO7t-xxvX84fL8f/s629/KakaoTalk_20240531_151835582_08.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGCSTYls9bcrsfbLLSdCBRjvnWISCytj6EqOu9MKsWJHWts_UXvNa0udJpog7-OivrbJVHCERKSft28Ss37RBivnPZmj0oJCdxy_FL_Fr9T6pckGvIFHPXRsy34QvzzXXLQ_Q9qGg6QIThVHh5Hzyam3h_j9CylzXLV4NqIHXCYCK-3zEhPhkJptiqk7Ta/s576/KakaoTalk_20240614_004220177_08.jpg",
        selectedAnswer: null
    },    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifRmO0K_irBC9VbSCvzB60S9TtoPb-ewZ2qlpjehmBTfBjtbNlyMECK1Ce5Foe0BCB7c0ObcoOKh1DfGYAXlLKk9wP9_Z-QHWJNBD3402M7csu4NTUuQ3wcISIAyPToJTZQ7uABB_7gvt_PHQrqEeluENKRKFHS_VnOCbBjpHhTRZXWwBadRUEL88xHsz0/s674/KakaoTalk_20240531_151835582_09.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJvKgRSdSQcpJLZmLkBNXPmhEibFm6jHhgiOlX5oohdV4sZauYgiMFYJrj2qX3gbIRopWzrnoLRKxicdmBBlLuRoFrBYzredcvbXHOS6jXygI0Hyjxv38XD8huoE7yirZSHPVzrMQZvWNOTQ9h-zLoGWG5e8B5uv5krPbxiLeKOx-CrTX4YGwou92KGHB1/s576/KakaoTalk_20240614_004220177_09.jpg",
        selectedAnswer: null
    },    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 11,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5QUqlWUrdPzuOc59faFjgnTD-iDdAQARh98ud3YEk7Hj8g0qRRMxuIyr7ajwuokN_COqXLb1kPRk9yfCDceECm2TQTlCxkuGtOIJSh2qStvmmcnpsvyMrNjFSaSsfLB-nKzI2i_qNb-C_mJ6A_nO1bbNRp8bDFC8hkj2XjjUWt70yONQXXH7zsV21G1Ax/s845/KakaoTalk_20240531_151835582_10.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYHeNJvbKc3omet9F90lPDxlAm_owBVpXxxongmt0-7ces5x_VuMi3LUAdJqS1Hrfl6CA6rknuxwFCu5nGW-BZbckt8oAL_nyniM89mqbPLR7e3_pmX1l7hw25Xs7OgfrtICLxvxDkJpPqy0593pXFlACI1PGBveDWxGytU42x_iMG7I7_TxLQNJ0ZBxXS/s561/KakaoTalk_20240614_004220177_10.jpg",
        selectedAnswer: null
    },    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 12,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1ojIvxFTmVYtHLLv1FBR0oTNUZkupYGzhNMQ8rALNLhL5S5xaNqxgN3Tcow0XMQKc7vNeZ068S5sqtBlsrbPnCiRlb7C8UggJPf5Ev_aU2Wanul1q959MzpzaVZrPfqQcWI-IL7jCyLm2cH_ulBreM4iZAFyLMg8BbWDsJ-mtT1g3LC4aJrF5T0GeFoH2/s681/KakaoTalk_20240531_151835582_11.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNjvW411lYBgR3EypzMpR4sp8wanDvtfSxoBHS60sXTnY54OLfRxYXmYalzWKR7rcF2J6-rAxPy_zZQnmeaioEXtvAVlmTGBTwq_AHJlpb7yNL_6lMcxkfO4gYK7cyWUkwwYqzkg_Y16ycS8PruK9voC_vydUJrInZH3XCTyVX_BAW0EGtMUH0b3634mg2/s585/KakaoTalk_20240614_004220177_11.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();