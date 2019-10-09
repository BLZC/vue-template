<!-- 用户管理 -->
<template>
  <div class="userManage">
    <add-form :dialog="dialog"
              :data="childForm"
              v-if="dialog.show"></add-form>
    <top-buttons>
      <div class="item_ipt">
        <el-input placeholder="请输入查询条件，点击回车确认"
                  suffix-icon="el-icon-search"
                  clearable
                  v-model="search"></el-input>
      </div>
      <div class="item_btn">
        <el-button type="primary"
                   icon="el-icon-plus"
                   @click="Add">新增</el-button>
      </div>
      <div class="item_btn">
        <el-button type="danger"
                   @click="deleteAll"
                   icon="el-icon-delete">删除</el-button>
      </div>
    </top-buttons>
    <div class="table">
      <basic-table :Tabledata="tableData"
                   :Tableheader="tbHeader"
                   :pagination="pagination"
                   :dialog="dialog">
        <el-table-column fixed="right"
                         label="操作"
                         width="220">
          <template slot-scope="scope">
            <el-button v-for="bitem in Slotbuttons"
                       :key="bitem.id"
                       :icon="bitem.icon"
                       @click="Handle(scope.row, bitem.id, bitem.url)"
                       :type="bitem.type">{{bitem.text}}</el-button>
          </template>
        </el-table-column>
      </basic-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userManage',
  data () {
    return {
      childForm: {} /* data in dialog -->form  */,
      pagination: {
        currentPage: 1,
        psize: 10,
        total: null
      } /* 分页设置 */,
      Slotbuttons: [
        {
          id: 1,
          icon: 'el-icon-edit',
          type: 'text',
          url: '/getuserDetail',
          text: '编辑'
        },
        {
          id: 2,
          type: 'text',
          icon: 'el-icon-delete',
          url: '/apiusersdelete',
          text: '删除'
        },
        {
          id: 3,
          type: 'text',
          url: '/deleteuser',
          text: '其他'
        }
      ] /* Table operator */,
      dialog: {
        type: 1,
        show: false,
        title: ''
      } /* dialog status */,
      search: '',
      tbHeader: [
        {
          id: 1,
          prop: 'name',
          label: '姓名',
          width: '180'
        },
        {
          id: 2,
          prop: 'birth',
          label: '出生日期',
          width: '180'
        },
        {
          id: 3,
          prop: 'age',
          label: '年龄',
          width: '120'
        },

        {
          id: 4,
          prop: 'sex',
          label: '性别',
          width: '120'
        },
        {
          id: 5,
          prop: 'address',
          label: '地址'
        }
      ] /* Table Header config */,
      tableData: { data: [] } /* table data */
    };
  },
  methods: {
    //  add user
    Add () {
      this.dialog.show = true;
      this.dialog.title = '新增';
      this.dialog.type = 1;
      this.childForm = {
        name: '',
        age: null,
        sex: null,
        birth: '',
        address: ''
      };
    },
    //  edit user
    Edit (id) {
      /**
       * 编辑数据时采用前端遍历得到要编辑的具体数据-->前提：获取数据列表时已经获取所有数据信息
       */
      this.dialog.title = '编辑';
      this.dialog.show = true;
      this.dialog.type = 2;
      this.tableData.forEach(element => {
        if (element.id === id.id) {
          this.childForm = element;
        }
      });
      //  this.$post(url, { id: id.id }).then(res => {
      //   if (res.status) {
      //     this.childForm = res.result
      //   }
      // })
    },
    //  handle Function
    Handle (id, type, url) {
      switch (type) {
        case 1:
          this.Edit(id, url);
          break;
        case 2:
          this.deleteOne(id, url);
          break;
      }
    },
    //  delete one user
    deleteOne (id, url) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$LZCMessage('删除成功', 'success');
      }).catch(() => {
        this.$message('已取消删除', 'info');
      });
    },
    //  delete all user
    deleteAll () {
      let ids = [];
      this.$store.state.table.multipleSelection.forEach(element => {
        ids.push(element.id);
      });
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$LZCMessage('删除成功', 'success');
      }).catch(() => {
        this.$LZCMessage('已取消删除', 'info');
      });
    }
  }
};
</script>
