<template>
  <div
    class="
      w-full
      flex flex-col
      gap-y-2
      text-white
      p-3
      bg-[url('@/assets/images/paper-grey.webp')] bg-cover
      rounded-xl
    "
  >
    <header class="w-full flex h-10 justify-around items-center gap-x-3">
      <div class="h-full rounded-full w-10 overflow-hidden">
        <img
          :src="user.photo"
          alt="image de porfil de l'utilisateur"
          class="object-cover"
        />
      </div>
      <div class="flex-grow">
        <p>{{ user.name }}</p>
        <p>{{ comment.dateTime }}</p>
      </div>
      <div><i class="fas fa-eraser"></i><i class="fas fa-trash"></i></div>
    </header>

    <div>
      <p>
        {{ comment.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // comment: {
    //   type: Object,
    //   default: { id: 'blabalaba' },
    //   required: true,
    // },
  },

  data() {
    return {
      user: {
        id: 'sffsdfsfs',
        name: 'Equipe Openclassroooms blabalaba',
        photo: 'https://picsum.photos/50',
      },
      comment: {
        dateTime: '00/00/00 00h00',
        content:
          'Cras sed fermentum augue. Cras eget consectetur turpis. Nunc a mauris quis sem dignissim accumsan. Nullam id dignissim urna. Aliquam arcu ligula, pretium ut malesuada ut, gravida in risus. Aliquam erat volutpat. Cras congue bibendum justo, sed commodo odio feugiat et. Fusce sit amet molestie felis.',
      },
    }
  },

  computed: {},
  created() {},
}
</script>