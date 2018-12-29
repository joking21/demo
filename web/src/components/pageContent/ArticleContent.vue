<template>
  <div>
      <p style="padding: 15px; text-align: center;">
          {{content.title}}
      </p>
      <div v-html="content.content"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      content: {}
    };
  },
  created: function() {
    this.getData("PageArticle.getContent", { id: this.id }, this.dealData);
  },
  props: ["id", "getData"],
  methods: {
    dealData(res) {
      this.content = res.result[0];
    }
  }
};
</script>
