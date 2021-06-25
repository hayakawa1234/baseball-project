<template>
  <div class="mein-img">
    <div class="title-area"></div>
    <div class="img-area">
      <div class="koshien-area">
        <div class="userPosts">
          <div class="userinfo-section">
            <div class="icon">
              <img src="../assets/icon.png" width="30px" height="30px" />
            </div>
            <div class="userInfo">
              <span>UserName</span>
            </div>
            <div class="userInfo">
              <span>UserId</span>
            </div>
          </div>
          <div class="img-section">
            <img src="../assets/noimage2.jpg" width="600px" max-height="auto" />
          </div>
          <div
            class="comment"
          >CommentCommentCommentCommentCommentCommentCommentCommentComaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
        <div class="userPosts">
          <div class="userinfo-section">
            <div class="icon">
              <img src="../assets/icon.png" width="30px" height="30px" />
            </div>
            <div class="userInfo">
              <span>UserName</span>
            </div>
            <div class="userInfo">
              <span>UserId</span>
            </div>
          </div>
          <div class="img-section">
            <img src="../assets/icon.png" width="600px" height="auto" />
          </div>
          <div
            class="comment"
          >CommentCommentCommentCommentCommentCommentCommentCommentComaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
        <div class="userPosts">
          <div class="userinfo-section">
            <div class="icon">
              <img src="../assets/icon.png" width="30px" height="30px" />
            </div>
            <div class="userInfo">
              <span>UserName</span>
            </div>
            <div class="userInfo">
              <span>UserId</span>
            </div>
          </div>
          <div class="img-section">
            <img src="../assets/uma-4.jpg" width="600px" height="auto" />
          </div>
          <div
            class="comment"
          >CommentCommentCommentCommentCommentCommentCommentCommentComaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mein-img {
  .title-area {
    margin-top: 100px;
  }
  .userinfo-section {
    margin-top: 40px;
    justify-content: flex-start;
    display: flex;
    width: 90%;
  }
  .icon {
    position: relative;
  }
  .userInfo {
    margin-left: 10px;
    position: relative;
    span {
      font-size: 20px;
      font: bold;
    }
  }
  .comment {
    word-break: break-all;
    font-size: 20px;
    font: bold;
  }
  .img-section {
    text-align: center;
  }
  .userPosts {
    position: relative;
    max-width: 600px;
  }
}
</style>