footer.innerHTML=`
<style>
    footer style{
        display:none;
    }
    footer *{
        font-size: 14px;
        color:#888;
        margin: 4 3 4;
        display: inline;
    }
    footer #Copyright{
        display: block;
        margin: 8 auto 0;
    }
    footer a{
        text-decoration: underline;
    }
</style>
    <p id="Copyright">Copyright © ${((y)=> y==2023 ? y : '2023-'+y)(new Date().getFullYear())} bddjr.</p>
    <a href="https://github.com/bddjr/bddjr.cn" target="_blank" rel="noopener">源码仓库</a>
    <!--<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener">未备NaN号-NaN</a>-->
${footer.innerHTML}`
