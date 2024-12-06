import React from 'react';
import S from './style.js';
import Footer from "../../layout/Footer.jsx";
import Slide from './Slide.jsx';
import { Link } from 'react-router-dom';

const OthersPost = () => {
    return (
        <div>
            
        <S.Post>
                <div className='my-post-box'>
                    <div className='my-post'>
                        <div className='my-profile'>
                            <img className='profile' src="/assets/images/community/profile.svg" alt="나의 프로필" />
                            <p className='nick-name'>고기고기냠냠냠</p>

                            <div className='follow-box'>
                                <button type='button' className='follow'>
                                    <p className='follow-text'>팔로우</p>
                                </button>
                            </div>
                            <div className='following-box'>
                                <button type='button' className='following'>
                                    <p className='following-text'>팔로잉</p>
                                </button>
                            </div>
                            <script>
                                const follow = document.qury
                            </script>
                            
                        </div>
                        <Slide />
                        <div className='box'>
                            <div className='my-like'>
                                <img className='like' src="/assets/images/community/like.svg" alt="하트" />
                                <p className='like-number'>0</p>
                                <img className='dot' src="/assets/images/community/dots.svg" alt="삼점메뉴" />
                            </div>
                            <div className='text1'>
                                <p>게시물에 적은 본문 내용이 여기에 적힙니다<br/>
                                # 태그를 이용해서 연관 검색어에 걸리도록 작성가능합니다.<br/>
                                아무거나 적어주세요.<br/>
                                당신의 반려동물에 관한건 뭐든지요.<br/>
                                사진은 필참이기에 게시글만 올라올 가능성은 없습니다.<br/>
                                아름다운 말만 적어주세요.</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-comment'>
                        <div className='comment-number'>
                            <p className='text2'>댓글</p>
                            <p className='text2'>0</p>
                        </div>
                        <div className='box1'>
                            <img className='profile2' src="/assets/images/community/profile.svg" alt="나의 프로필" />
                            <div className='input-container'>
                                <input className='input' placeholder='댓글을 입력해주세요.'></input>
                                <button className='button'>완료</button>
                            </div>
                        </div>
                        <div className='comment-box'>
                            <p className='text3'>등록된 댓글이 없습니다.</p>
                        </div>
                    </div>
                </div>

        </S.Post>
        <S.BestPost>
            <div className='bestBox'>
                <p className='text4'>유저들의 비슷한 공감 베스트</p>
                <div className='best-post-box'>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost1.svg" alt="베스트 게시물1" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost2.svg" alt="베스트 게시물2" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost3.svg" alt="베스트 게시물3" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost4.svg" alt="베스트 게시물4" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost3.svg" alt="베스트 게시물3" /></Link>
                    <Link to={"../others-post"}><img className='bestPost' src="/assets/images/community/bestPost5.svg" alt="베스트 게시물5" /></Link>
                </div>
            </div>
        </S.BestPost>

        <Footer />
    </div>
    
    );
};

export default OthersPost;