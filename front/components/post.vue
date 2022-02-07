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
        <p>{{ post.dateTime }}</p>
      </div>
      <div><i class="fas fa-ellipsis-h"></i></div>
    </header>

    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <div>
      <p>
        {{ post.content }}
      </p>
      <div class="w-full">
        <img :src="post.multimedia" class="object-cover w-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: { id: 'blabalaba' },
      required: true,
    },
  },

  data() {
    return {
      user: {
        id: 'sffsdfsfs',
        name: 'Equipe Openclassroooms blabalaba',
        photo: 'https://picsum.photos/50',
      },
    }
  },
}
</script>