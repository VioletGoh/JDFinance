<template>
    <Panel cname="mIcon">
        <ul>
            <router-link to="" tag="li" v-for="(item, i) in iconData" :key="i">
                <div class="img"><img :src="item.url" :alt="item.title"></div>
                <p class="title">{{ item.title }}</p>
                <p class="tip" v-if="item.tip">{{ item.tip }}</p>
            </router-link>
        </ul>
        <div class="banner"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/50201/4/7570/92412/5d5258cdE8ba90360/f676e28d6896f13f.jpg?width=750&height=200"></div>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';

export default {
    name: 'MIcon',
    data() {
        return {
            iconData: [
                {
                    url: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/69506/40/2501/5076/5d0c2ff7E903b5e99/5333b1c655b4c7bf.png?width=90&height=90',
                    title: '去赚钱',
                    tip: ''
                },
                {
                    url: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/22708/8/15082/7446/5cad5c35E7e3ae22b/72adc577175d7c4f.png?width=90&height=90',
                    title: '双签',
                    tip: ''
                },
                {
                    url: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/62829/35/1167/4169/5cf64e75Ec0e5b729/eb07348c21179775.png?width=90&height=90',
                    title: '优惠券',
                    tip: ''
                },
                {
                    url: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/47642/31/1640/4856/5cf64f24E67912a6f/2a4bf9dc9793872b.png?width=90&height=90',
                    title: '单单返京豆',
                    tip: '最高618'
                },
                {
                    url: 'https://img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90',
                    title: '全部',
                    tip: ''
                },
            ]
        }
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .mIcon{
        ul{
            padding-bottom: 1rem;
            @include list(row);
            li{
                // width: 20%;
                flex: 1;
                text-align: center;
                position: relative;
                .img{
                    width: 2.25rem;
                    height: 2.25rem;
                    font-size: 0;
                    margin: .95rem auto 0;
                    img{
                        width: 100%;
                        display: block;
                    }
                }
                .title{
                    color: #333;
                    font-size: .6rem;
                    margin: .45rem auto 1.2rem;
                }
                .tip{
                    width: 2.2rem;
                    height: 1.15rem;
                    line-height: .9rem;
                    font-size: .45rem;
                    color: #fff;
                    text-align: center;
                    background-size: 2.2rem 1.15rem;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAuCAYAAABd5YVlAAAEvklEQVRoge2aX2gcRRzHv7/d9Wqb2iZ4BmkxVS+0xSehwSpKRMS2+BwEQeyDILSIKCj46lN9EOyD+NCXxicLgm9FfFCDiFVoQPAPIm2jxjZok6axyTXJ3c74cLfX2dnfzE6au5DZ7heG3ZudmZ373Pd+M7szhI0VbfD9OMmNutG6vqw8+QjojV9d29gMYBM5AZbDeyVEu7QEINqpfU4zv1vr384X5uroeZsJpKt04JkfQA4psLsMlwU4OhQFXxwffqoS0PMk8CRJ1CAwAIGK/kvzSQKxlmcrH2t19Tp6W9w1qdSXAGKsQmBeSlyUAt+tCnH28IWpb7+JY9H+rinQcncLcjfgEnNOrx7cFnz4wp6jEegdkrJmBbL54abzJSBjXGwK8d5rf1/++NTKzeQqkAZtDS95cFmwV0/sfejebdEnJDGS6mSB4CJuHaXA+blm88X7/ro0hTUCDhzAkpKC6+/ve6a6PTpHhBFL3cKIgJFqGJ27PlR7Gi1eKg/AYlATXL0iAaCFD/Yd2rk1PAuguv5ue6XqziD8fGF37TB4sCxgDi5XMZg+Mbx/x93hGQCVLnXYN1V2hOGZ6fsf3I9bDgZz7EiHy4Ide7QS7eqvjAO4p7v99U7bd0WV8bGwEsEBcF7MDQDQ6VcefjkgHOh6Vz1UABw4PfjAUSh8LGU74gYwGtxKYV8leLtXnfVRfUH41iAohMaqfbkD2xYWCABNvlsbJUKtx/31SgTUJqt7RpEzcwiYzM60C0Aw0Bcd6XFfvdRAFB5BmxHSgJGcc85NzWu33EUHe99V/7SF6DFk573GAY2NuSFRGRIYhQiGcRsxNxUWiNDf+676JwL6kQ0LGedywVgFfKc+NLjIGG8BkD6g6Tb38b3shkgACzDzYgc0IBsaSjFaleIScoyoD2ilcx1Vl+I8+JBgHNBgKlgqrd9Wl7+Co3NNMbcUo4YUfxyav/JDXjlunoucvDteU43GR0utNQurbC/LS7CMlqX4+fGrf37qUjZvNlACViSA+vjCtTfngSZu7WZQU0qmJ7RSmiTQmFi68fqxxWsXYIaa+mx92VuqJQHUv1y8cfzZuZmvkV0ndnZuKU11Ef9ycvbfsedmZyaQXbA3hQYJAFH7hJRM500PRdaKFNM/1W+eeuLK5c+aQAP2XRkcMxkZ2mZtXlRJoBFL8d+ykNNzK/GP3y8tTrz0z+xkszVwxVqyAU4xS71ebKewnSImJdfU8kk7PoobjPQ9jTrcJrLQ9b09gOZcNV5wSSA7m5DwF6wq1XX6hiodLrf5inVuAjeBZPr1dLBSqeM7XM5U3O60xLWm3WiZNm0xV6D1t08aUK+pcAH/AHMwTHB19+pb+nKdy91ADQWxVi4BXwS4ec7V907qMZadhgFZ53Jg1WvcmpFvYFXZxhnjpldkHyRYqTFXvSH3xkd3rK+uVaW7TQWrH3W3chuijWGBu6HQzpMYXASwiVxmSdy5FSyQfkLTL6oQkzL6rKFocJOjS+LqpmRzbiIOKLeU7JvY6RN4gNxnUzsdsevtzNHm1iLCdTlybaTk4twkrwhuNckEzPS3t0JN5LJuVhSn5skFoBPURDZQrhB9hO0KaU0wdYXrqeyp1gVsLfofkw2rnUOqZEgAAAAASUVORK5CYII=);
                    background-repeat: no-repeat;
                    position: absolute;
                    top: .7rem;
                    right: 0;
                    margin-right: -.35rem;
                }
            }
        }
        .banner{
            font-size: 0;
            padding-bottom: 2rem;
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>