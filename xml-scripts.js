$(document).ready(function(){
    $.ajax({
          url: 'https://smileschool-api.hbtn.info/xml/quotes',
          type: 'GET',
          dataType: 'xml',
          beforeSend: function() {
        $("#MyLoader").show();
      },
          success: function(request) {
            $("#MyLoader").hide();
            $(request).find('quote').each(function(i, el) {
              let $html = $(`
              <div class="carousel-item carousel-item-content ${i === 0 ? 'active' : ''}">
                  <div class="row">
                      <div class="col-sm-3 text-center">
                          <img class="rounded-circle" src=${$(this).find('pic_url').text()} class="d-block w-100" alt="random person image">
                      </div>
                      <div class="col-sm-8 ml-3 d-flex flex-column">
                          <div>&lt;&lt; ${$(this).find('text').text()} &gt;&gt;</div>
                          <div class="font-weight-bold mt-3">${$(this).find('name').text()}</div>
                          <div>${$(this).find('title').text()}</div>
                      </div>
                  </div>
              </div>`);
              $("#quotesCarouselInner").append($html);
            })
          },
        });


        $.ajax({
          url: 'https://smileschool-api.hbtn.info/xml/popular-tutorials',
          type: 'GET',
          dataType: 'xml',
          beforeSend: function() {
            $("#VideosLoader").show();
          },
          success: function(request) {
            $("#VideosLoader").hide();
                $(request).find('video').each(function(i, el) {
                  let $stars = '';
                  for (let j = 0; j < $(this).attr('star'); j++) {
                    $stars += '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">';
                  }
                  for (let j = 0; j < 5 - $(this).attr('star'); j++) {
                    $stars += '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">';
                  }
                  let $html = $(`
                      <div class="text-center col-12 col-sm-6 col-md-3">
                          <div class="carousel-item active">
                              <img class="w-100" src="${$(this).find('thumb_url').text()}" alt="smile image">
                              <div class="mx-3">
                                  <div class="font-weight-bold text-dark text-left mt-3">
                                      ${$(this).find('title').text()}
                                  </div>
                                  <div class="text-secondary text-left mt-3 mb-3">
                                      ${$(this).find('sub-title').text()}
                                  </div>
                                  <div class="d-flex align-items-center mb-3">
                                      <img src="${$(this).find('author_pic_url').text()}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                                      <div class="purple-text font-weight-bold">${$(this).find('author').text()}</div>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                      <div class="d-flex pt-1">
                                      ${$stars}
                                      </div>
                                      <div class="purple-text font-weight-bold">
                                          ${$(this).find('duration').text()}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`);
                      $("#tutorialvideos").append($html);

                    })
                  },
                });


          $.ajax({
            url: 'https://smileschool-api.hbtn.info/xml/latest-videos',
            type: 'GET',
            dataType: 'xml',
            beforeSend: function() {
              $("#LVideosLoader").show();
            },
            success: function(request) {
              $("#LVideosLoader").hide();
              $(request).find('video').each(function(i, el) {
                let $stars = '';
                for (let j = 0; j < $(this).attr('star'); j++) {
                  $stars += '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">';
                }
                for (let j = 0; j < 5 - $(this).attr('star'); j++) {
                  $stars += '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">';
                }
                let $html = $(`
                    <div class="text-center col-12 col-sm-6 col-md-3">
                        <div class="carousel-item active">
                            <img class="w-100" src="${$(this).find('thumb_url').text()}" alt="smile image">
                            <div class="mx-3">
                                <div class="font-weight-bold text-dark text-left mt-3">
                                    ${$(this).find('title').text()}
                                </div>
                                <div class="text-secondary text-left mt-3 mb-3">
                                    ${$(this).find('sub-title').text()}
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <img src="${$(this).find('author_pic_url').text()}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                                    <div class="purple-text font-weight-bold">${$(this).find('author').text()}</div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex pt-1">
                                    ${$stars}
                                    </div>
                                    <div class="purple-text font-weight-bold">
                                        ${$(this).find('duration').text()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`);
                    $("#latestvideos").append($html);
              })
              },
            });



            $.ajax({
                  url: 'https://smileschool-api.hbtn.info/xml/courses',
                  type: 'GET',
                  dataType: 'xml',
                  data: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                  },
                  beforeSend: function() {
                $("#CoursesLoader").show();
              },
                  success: function(request) {
                    $("#CoursesLoader").hide();
                    let $topics = '';
                    $(request).find('topics').find('topic').each(function(i, el) {
                      let $t = $(this).text();
                      if (i === 0) {
                        $("#topic-menu-container").append(`<button class="btn btn-secondary border-0 rounded-0 search-element w-100 text-left" type="button" id="current-topic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ${$t.substr(0,1).toUpperCase()+ $t.substr(1)}
                        </button>
                        <div class="dropdown-menu" id="topic-menu" aria-labelledby="topic-menu-container"></div>`);
                      }
                      $topics += `<button data-value="${$t}" class="dropdown-item" type="button">${$t.substr(0,1).toUpperCase()+ $t.substr(1)}</button>`;

                    })
                    $("#topic-menu").append($topics);


                    let $sorts = '';
                    $(request).find('sorts').find('sort').each(function(i, el) {
                      let $s = $(this).text();
                      if (i === 0) {
                      $("#sort-menu-container").append(`<button class="btn btn-secondary border-0 rounded-0 search-element w-100 text-left" type="button" id="current-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ${$s.substr(0,1).toUpperCase()+ $s.substr(1,3) + ' ' + $s.substr(5,1).toUpperCase() + $s.substr(6)}
                      </button>
                      <div class="dropdown-menu" id="sort-menu" aria-labelledby="sort-menu-container"></div>`);
                    }
                    $sorts += `<button data-value="${$s}" class="dropdown-item" type="button">${$s.substr(0,1).toUpperCase()+ $s.substr(1,3) + ' ' + $s.substr(5,1).toUpperCase() + $s.substr(6)}</button>`;

                    })

                    $("#sort-menu").append($sorts);
                    $.displayCourses('', $('#current-topic').text().trim(), $('#current-sort').text().trim());

                    let $topicVal;
                    $('#topic-menu button').click(function(e) {
                      $topicVal = e.target.getAttribute('data-value');
                      $('#current-topic').text(e.target.textContent);
                      $.displayCourses($("#user_search").val(), $('#current-topic').text().trim(), $('#current-sort').text().trim());
                    });
                    $('#sort-menu button').click(function(e) {
                      $topicVal = e.target.getAttribute('data-value');
                      $('#current-sort').text(e.target.textContent);
                      $.displayCourses($("#user_search").val(), $('#current-topic').text().trim(), $('#current-sort').text().trim());
                    });
                    $('#user_search').on('input', function(e) {
                      setTimeout(function() {
                        $.displayCourses($("#user_search").val(), $('#current-topic').text().trim(), $('#current-sort').text().trim());
                      }, 500);
                    });

                  }
                });

                $.displayCourses = function($q, $t, $s) {
                  $.ajax({
                        url: 'https://smileschool-api.hbtn.info/xml/courses',
                        type: 'GET',
                        dataType: 'xml',
                        data: {
                          action: 'query',
                          list: 'search',
                          format: 'json',
                          q: $q,
                          topic: $t,
                          sort: $s,
                        },
                        beforeSend: function() {
                      $("#CoursesLoader").show();
                    },
                        success: function(request) {
                          $("#CoursesLoader").hide();
                          $("#coursesvideos").empty();
                          let $number = $(request).find('courses').find('course').length;
                          $("#numberofvideos").text(`${$number === 1 ? '1 video' : $number + ' videos'}`);
                          $(request).find('courses').find('course').each(function(i, el) {
                          let $stars = '';
                          for (let j = 0; j < $(this).attr('star'); j++) {
                            $stars += '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">';
                          }
                          for (let j = 0; j < 5 - $(this).attr('star'); j++) {
                            $stars += '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">';
                          }

                          let $html = $(`
                              <div class="text-center col-12 col-sm-6 col-md-3">
                                  <div class="carousel-item active">
                                      <img class="w-100" src="${$(this).find('thumb_url').text()}" alt="smile image">
                                      <div class="mx-3">
                                          <div class="font-weight-bold text-dark text-left mt-3">
                                              ${$(this).find('title').text()}
                                          </div>
                                          <div class="text-secondary text-left mt-3 mb-3">
                                              ${$(this).find('sub-title').text()}
                                          </div>
                                          <div class="d-flex align-items-center mb-3">
                                              <img src="${$(this).find('author_pic_url').text()}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                                              <div class="purple-text font-weight-bold">${$(this).find('author').text()}</div>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                              <div class="d-flex pt-1">
                                              ${$stars}
                                              </div>
                                              <div class="purple-text font-weight-bold">
                                                  ${$(this).find('duration').text()}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>`);
                              $("#coursesvideos").append($html);

                        })
                }
              });
            }
    });
