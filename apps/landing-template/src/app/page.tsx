"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Images, type ImageItemProps } from "@driven/ui";

export default function Home() {
  const images1: ImageItemProps[] = [
    {
      path: "/cellis/2/01.gif",
    },
    {
      path: "/cellis/2/02.jpg",
    },
    {
      path: "/cellis/2/03.jpg",
    },
    {
      path: "/cellis/2/04.jpg",
    },
    {
      path: "/cellis/2/05.jpg",
    },
    {
      path: "/cellis/2/06.jpg",
    },
  ];
  return (
    <div className={styles.container}>
      <Images images={images1} className={styles.image} />
      {/* <div className={styles.form_section} id="form_section">
        <form name="form" id="form">
          <div className={styles.inputForm_wrapper}>
            <div>
              <label className={styles.name_label} htmlFor="counsel_name">
                이름
              </label>
              <input id="counsel_name" type="text" placeholder="성함 입력" />
            </div>
            <div>
              <label className={styles.num_label}>연락처</label>
              <span>010</span>
              <input
                type="text"
                name="counsel_hp"
                max="8"
                placeholder="숫자 8자리"
              />
            </div>
          </div>
          <div className={styles.privacy_box}>
            <label htmlFor="privacy_agree">
              <input
                id="privacy_agree"
                type="checkbox"
                checked={true}
                onChange={() => {}}
              />
              <span></span>
              <span className={styles.agreeText}>
                개인정보 수집 및 이용에 동의합니다.
              </span>
            </label>
            <span id="agreeView" className={styles.agreeText + " cursor"}>
              [보기]
            </span>
          </div>
        </form>
        <img
          id="submitBtn"
          className={styles.submitBtn}
          src="https://cdn.driven.run/landing/cellis/2/submitBtn.gif"
          alt=""
        />
      </div> */}
      <div id="myModal" className={styles.modal}>
        <div className={styles.modal_content}>
          <span
            className={styles.close}
            onClick={() => console.log("modalClose(event)")}
          >
            X테스트22ㅅㄷㄴㅅsaadddasads486sad
          </span>
          <br />
          <h3>개인정보취급방침</h3>
          <br />
          <p>1. 개인정보 수집 및 이용 목적</p>
          <p>전화,SMS를 통한 상담 및 안내</p>
          <br />
          <p>2. 수집하는 개인정보 항목</p>
          <p>이름, 연락처</p>
          <br />
          <p>3. 보유 및 이용기간</p>
          <p>수집이용 동의일로부터 수집이용 목적을 달성할 때까지</p>
          <br />
        </div>
      </div>
    </div>
  );
}
