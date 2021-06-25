<template>
  <div class="myteam-container">
    <div class="img-area">
      <img src="../assets/memories.jpeg" width="100%" />
    </div>
    <div class="member-table">
      <div class="midasi-table">
        <table>
          <th>number</th>
          <th>name</th>
          <th>throws/bats</th>
          <th>Career</th>
          <td></td>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.myteam-container {
  margin-top: 150px;
  .img-area {
    max-width: 500px;
    min-width: 150px;
    max-height: 380px;
    min-width: 150px;
    margin: auto;
  }
  .midasi-table {
    table {
      border: solid 1px #000000;
    }
  }
}
</style>