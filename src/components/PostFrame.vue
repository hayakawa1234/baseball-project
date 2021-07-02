<template>
  <div class="timeline">
    <div class="post-area">
      <div v-for="member in members" :key="member.id">
        <div class="userPosts">
          <div class="userinfo-section">
            <img class="icon" :src="member.icon" width="100%" height="100%" />
            <div class="userInfo">
              <span>{{member.user}}</span>
            </div>
            <div class="userInfo">
              <span>{{member.id}}</span>
            </div>
          </div>
          <img class="img-section" :src="member.picture" width="100%" height="100%" />
          <div class="comment">{{member.comment}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default { 
  data() {
    return {
      members: [
        {
          user: "userOne",
          id: "id0001",
          icon: require("../assets/icon.png"),
          picture: require("../assets/uma-4.jpg"),
          comment:
            "桁数がいっぱい桁数がいっぱい桁数がいっぱい桁数がいっぱい桁数がいっぱい桁数がいっぱい桁数がいっぱい桁数がいっぱい桁数がいっぱい"
        },
        {
          user: "userTwo",
          id: "id0002",
          icon: require('../assets/icon.png'),
          comment:
            "画像無しの投稿を模したコメント"
        },
        {
          user: "userThree",
          id: "id0003",
          icon: require('../assets/icon.png'),
          picture: require('../assets/mcqueen.jpg'),
          comment:
            "CommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentComment"
        },
        {
          user: "userFour",
          id: "id0004",
          icon: require('../assets/icon.png'),
          picture: require('../assets/node-module.png'),
          comment:
            "CommentCommentComment"
        },
        {
          user: "レムリン",
          id: "id0005",
          icon: require('../assets/remurinn.jpg'),
          picture: require('../assets/remurinn.jpg'),
          comment:
            "これはレムリン"
        }
      ]
    };
  }
};


</script>

<style lang="scss">
.timeline {
  .post-area {
    text-align: center;
    margin-bottom: 90px;
    display: block;
  }
  .userinfo-section {
    justify-content: flex-start;
    margin-bottom: 5px;
    display: flex;
  }
  .icon {
    position: relative;
    width: 30px;
    height: 30px;
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
    text-align: left;
  }
  .img-section {
    text-align: center;
  }
  .userPosts {
    /*background: #cfd8dc ;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;*/
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 600px;
  }
}
</style>