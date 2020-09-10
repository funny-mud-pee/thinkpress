<template>
  <div class="container" style="padding-top: 90px">
    <b-row class="text-center">
      <b-col cols="9">
        <b-card
          align="left"
          no-body
          class="card-appearance"
        >
          <b-card-header header-bg-variant="white" header-tag="h5" class="main-card-header">
            <span class="header-text">Latest Posts</span>
          </b-card-header>
          <b-list-group flush>
            <b-list-group-item href="#some-link">
              <b-media vertical-align="center">
                <template v-slot:aside>
                  <b-img blank blank-color="#ccc" width="240" height="150" alt="illustrations of article"></b-img>
                </template>
                <h5 class="mt-0 mb-1">Media object</h5>
                <div class="article-excerpt">
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  </p>
                </div>
                <div class="article-meta">
                  <div class="article-meta-item author">
                    <b-avatar text="UA" icon="person-fill" class="mr-1" size="2rem"></b-avatar>
                    <span class="mr-auto">Funny mud Pee</span>
                  </div>
                  <span class="article-meta-item">
                    5 hours ago
                  </span>
                  <span class="article-meta-item">
                    <b-icon-eye-fill></b-icon-eye-fill>
                    3.3k
                  </span>
                  <span class="article-meta-item">
                    <b-icon-chat-dots-fill></b-icon-chat-dots-fill>
                    97
                  </span>
                  <span class="article-meta-item">
                    <b-icon-heart-fill></b-icon-heart-fill>
                    88
                  </span>
                </div>
              </b-media>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <b-media vertical-align="center">
                <template v-slot:aside>
                  <b-img blank blank-color="#ccc" width="240" height="150" alt="illustrations of article"></b-img>
                </template>
                <h5 class="mt-0 mb-1">Media object</h5>
                <div class="article-excerpt">
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  </p>
                </div>
                <div class="article-meta">
                  <div class="article-meta-item author">
                    <b-avatar text="UA" icon="people-fill" class="mr-1" size="30"></b-avatar>
                    <span class="mr-auto">Funny mud Pee</span>
                  </div>
                  <span class="article-meta-item">
                    5 hours ago
                  </span>
                  <span class="article-meta-item">
                    <b-icon-eye-fill></b-icon-eye-fill>
                    3.3k
                  </span>
                  <span class="article-meta-item">
                    <b-icon-chat-dots-fill></b-icon-chat-dots-fill>
                    97
                  </span>
                  <span class="article-meta-item">
                    <b-icon-heart-fill></b-icon-heart-fill>
                    88
                  </span>
                </div>
              </b-media>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          align="left"
          no-body
          class="card-appearance"
        >
          <b-card-header header-bg-variant="white" header-tag="h5" class="border-0 aside-card-header">
            <span class="header-text">Most Viewed</span>
          </b-card-header>
          <b-list-group flush class="aside-list-group">
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-card>
        <b-card
          align="left"
          no-body
          class="card-appearance"
        >
          <b-card-header header-bg-variant="white" header-tag="h5" class="border-0">Latest Comments</b-card-header>
          <b-list-group flush class="aside-list-group">
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
            <b-list-group-item href="#some-link">
              <div class="aside-article-title">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</div>
              <span class="text-meta">
                5 hours ago
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        layout: 'default',
        data() {
            return {
                latestArticles: [],
                mostViewed: []
            }
        },
    }
</script>
