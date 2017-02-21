    $.validator.setDefaults( {
      submitHandler: function () {
        alert( "가입완료!" );
      }
    } );

    $( document ).ready( function () {
      $( "#signupForm" ).validate( {
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          password: {
            required: true,
            minlength: 6,
            maxlength: 16
          },
          conf_password: {
            required: true,
            minlength: 6,
            maxlength: 16,
            equalTo: "#password"
          },
          email: {
            required: true,
            email: true
          },
          tel2: {
            required: true,
          },
          tel3: {
            required: true,
          },
          birthday: {
            required: true,
          }
          
        },
        messages: {
          name: {
            minlength: "2자 이상 입력해주세요."
          },
          password: {
            minlength: "6~16자 입력해주세요"
          },
          conf_password: {
            minlength: "6~16자 입력해주세요",
            equalTo: "비밀번호가 일치하지 않습니다."
          }
        },
        
        errorElement: "em",
        errorPlacement: function ( error, element ) {
          // Add the `help-block` class to the error element
          error.addClass( "help-block" );

          // Add `has-feedback` class to the parent div.form-group
          // in order to add icons to inputs
          element.parents( ".col-sm-5" ).addClass( "has-feedback" );

          if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.parent( "label" ) );
          } else {
            error.insertAfter( element );
          }

          // Add the span element, if doesn't exists, and apply the icon classes to it.
          if ( !element.next( "span" )[ 0 ] ) {
            $( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
          }
        },
        success: function ( label, element ) {
          // Add the span element, if doesn't exists, and apply the icon classes to it.
          if ( !$( element ).next( "span" )[ 0 ] ) {
            $( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
          }
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
          $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
        },
        unhighlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
          $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
        }
      } );
    } );