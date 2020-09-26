<template>
    <div>
        <div>
            <div 
                v-for="item in uncheckedItems" 
                :key="item.id"
            >
                <input type="checkbox" v-model="item.checked">
                <input
                    type="text" 
                    v-if="item.editing" 
                    v-model="item.name"
                    :ref="'editing' + item.name"
                    @blur="finishEditingItem(item)"
                    >
                <span 
                    v-else
                    :class="item.checked ? 'checked' : ''"
                    @click="onItemClick(item)"
                >
                    {{ item.name }}
                </span> 
            </div>
            <div>
                <span class="typing" v-if="typing"><input v-model="uncheckedItems[uncheckedItems.length - 1].name"></span>
            </div>
            <div>
                <span class="addItem" @click="addItem" v-if="!typing">+   Add item</span>
            </div>
        </div>
    </div>
</template>

<script>
import funcs from '../firebase'

export default {
    data: function() {
        return{
            uncheckedItems: [],
            checkedItems: [],
            typing: false
        }
    },
    mounted() {
        this.getUncheckedItems()
    },
    methods: {
        onItemClick: function(item) {
            item.editing = true
            console.log(item)
            setTimeout(function(item) {
                console.log(item)
                this.$refs['editing' + item.name].focus()
            }, 100)
        },
        finishEditingItem: function(item) {
            item.editing = false
            // updateItem(item)
        },
        addItem: function() {
            this.uncheckedItems.push({
                name: '',
                qty: 1,
                checked: false
            })
            this.typing = true
        },
        addItemToDb: function(name) {
            funcs.httpsCallable('addItem')({ name }).then((res) => {
                this.uncheckedItems.push(res.data)
            })
        },
        getUncheckedItems: function() {
            funcs.httpsCallable('getUncheckedItems')().then((res) => {
                this.uncheckedItems = res.data
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .addButton {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: goldenrod;
        font-size: 30px;
        line-height: 50px;
        position: fixed;
        bottom: 10px;
        right: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    .checked {
        text-decoration: line-through;
        color: grey;
    }

    .typing {

    }
</style>