<template lang="pug">
div
  el-row
    el-col(:xs="24" :sm="18" :md="12")
      div
        h2 プライバシーポリシー
        p Eisuke Ueta(以下「製作者」と言います)が提供するサービスに関するプライバシーポリシー(以下「本ポリシー」と言います)です。
      div
        h3 個人情報等の利用目的
        p 製作者は、ユーザーからご提供いただいた名前、その他のユーザー個人に関わる情報(以下「個人情報等」といいます。)を、以下のために必要な範囲で利用させていただき、ユーザーの承諾なく、他の目的には利用いたしません。
        ol
          li 製作者のサービス提供のため
          li 製作者のサービスに関するお知らせや関連サービスのご案内のため
          li 製作者及び製作者サービスのユーザーに対する問い合わせ内容の正確な把握及び回答等の連絡のため
          li ユーザーの不正行為の監視のため
          li お問い合わせ、その他ご依頼等への対応のため
          li その他事前にご同意頂いた目的のため
      div
        h3 個人情報等の第三者提供
        p 製作者で保管した個人情報等については、以下のいずれかに該当する場合を除き、第三者へ提供、取扱いの委託をすることはありません。
        ol
          li 製作者が前条に定める利用目的の達成に必要な範囲内において個人情報等の取扱いを委託する場合
          li 合併その他の事由による事業の承継に伴って個人情報等が提供される場合
          li 国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
          li その他、個人情報保護法その他の法令で認められる場合
      div
        h3 個人情報等の開示
        p 製作者は、ユーザーから、個人情報保護法の定めに基づき個人情報等の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います(当該個人情報等が存在しないときにはその旨を通知いたします。)。但し、個人情報保護法その他の法令により、製作者が開示の義務を負わない場合は、この限りではありません。
      div
        h3 個人情報等の訂正及び利用停止等
        ol
          li 製作者は、ユーザーから、1個人情報等が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び2あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由又は偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で、遅滞なく必要な調査を行い、その結果に基づき、個人情報等の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、合理的な理由に基づいて訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。
          li 製作者は、ユーザーから、ユーザーの個人情報等について消去を求められた場合、製作者が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報等の消去を行います。なお、合理的な理由に基づいて消去を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。
          li 個人情報保護法その他の法令により、製作者が訂正等または利用停止等の義務を負わない場合は、前2項の規定は適用されません。
      div
        h3 Cookieについて
        p 製作者のサービスでは、一部のコンテンツにおいてCookieを利用しています。Cookieとは、webコンテンツへのアクセスに関する情報であり、個人情報は含まれません。また、お使いのブラウザ設定からCookieを無効にすることが可能です。
      div
        h3 アクセス解析ツールについて
        p 製作者のサービスは、Google, Inc.（以下「Google」）が提供する解析サービスであるGoogleアナリティクスを用いて、ログ情報を取得する機能を有しています。なお、ログ情報は、Googleへ送信された後、Googleにて分析統計処理が施され、個人が特定できないように加工された状態でGoogleから製作者へ送信されます。
        p 製作者は、マーケティング分析及び本サービスの品質向上のために、ログ情報を利用します。また、Googleは、Googleの責任の下、Googleの利用規約及びプライバシーポリシーに基づき、ログ情報を管理します。詳細については、Googleのホームページでご確認ください。
        a(href="https://policies.google.com/privacy?hl=ja&gl=jp" target="_blank")
      div
        h3 プライバシーポリシーの変更手続
        p 製作者は、個人情報等の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本ポリシーを変更することがあります。変更した場合には、本サイトに掲載する方法でユーザーに通知いたします。但し、法令上ユーザーの同意が必要となるような内容の変更の場合は、製作者所定の方法でユーザーの同意を得るものとします。
      div
        h3 お問い合わせ先
        p ご意見、ご質問等のお申出、その他個人情報等の取扱いに関するお問い合わせは、以下のお問い合わせ先までお願い致します。
        a(href='/contact') お問い合わせ

</template>

<script>
export default {
  middleware: 'notAuthenticated',
  components: {},
  head() {
    return {
      title: 'プライバシーポリシー'
    }
  }
}
</script>
