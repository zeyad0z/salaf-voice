<script setup>
import { ref, defineProps, defineEmits } from "vue";
// NOTE: Assuming VsxIcon is globally or locally available
import LoginDialog from "~/components/auth/loginDialog.vue";
import SignupDialog from "~/components/auth/signupDialog.vue";

const props = defineProps({
  initialMode: { type: String, default: "login" }, // login or signup
});

const emits = defineEmits(["close"]);

const mode = ref(props.initialMode);

function switchMode(newMode) {
  mode.value = newMode;
}

function closeModal() {
  emits("close"); // notify parent to hide modal
}
</script>

<template>
  <!-- Backdrop: Handles full-page scroll when content is too large (Signup) -->
  <div
    class="fixed inset-0 z-[9999] flex justify-center bg-[#364D5B]/48 backdrop-blur-xs overflow-y-auto"
    @click.self="closeModal"
  >
    <!-- Modal Container: Dynamic height logic -->
    <div
      class="rounded-[30px] bg-white w-[38.85rem] z-10 my-5 max-w-[95%] transition-all duration-300 shadow-xl"
      :class="{
        // Login Mode: Forces a tall container (97% of viewport height)
        'h-fit': mode === 'login',
        // Signup Mode: Allows natural content height up to max (max-h-97vh)
        'h-fit': mode === 'signup',
      }"
      style="min-height: 200px"
    >
      <!-- Inner Content Container: Dynamic layout based on mode -->
      <div
        :class="{
          // Login Mode: Use flex for full height and vertical centering
          'flex flex-col h-fit justify-center': mode === 'login',
          // Signup Mode: Use default block flow to ensure content dictates height, resolving clipping
          block: mode === 'signup',
        }"
      >
        <!-- Close Button: flex-shrink-0 ensures it stays visible at the top -->
        <div class="ps-5 pt-6 pb-2">
          <!-- VsxIcon component is assumed to be available -->
          <VsxIcon
            iconName="CloseSquare"
            :size="32"
            color="#57636F"
            type="linear"
            class="text-start cursor-pointer"
            @click="closeModal"
          />
        </div>

        <!-- Main Content (Tabs and Form) -->
        <div class="flex flex-col items-center gap-7 mt-5">
          <!-- Tabs: flex-shrink-0 ensures tabs are always visible -->
          <div
            class="bg-[#EFEFEF] rounded-[10px] border border-[#E5E5E5] flex justify-between items-center gap-2 w-[75%] p-2 flex-shrink-0"
          >
            <p
              class="text-center w-[50%] py-4 text-[1.125rem] cursor-pointer transition-colors"
              :class="
                mode === 'login'
                  ? 'text-[#ffffff] bg-[#497D74] border border-[#E9E9E9] rounded-[10px]'
                  : 'text-[#848B93]'
              "
              @click="switchMode('login')"
            >
              تسجيل الدخول
            </p>

            <p
              class="text-center w-[50%] py-4 text-[1.125rem] cursor-pointer transition-colors"
              :class="
                mode === 'signup'
                  ? 'text-[#ffffff] bg-[#497D74] border border-[#E9E9E9] rounded-[10px]'
                  : 'text-[#848B93]'
              "
              @click="switchMode('signup')"
            >
              انشاء حساب جديد
            </p>
          </div>

          <!-- Dialog content: The form itself -->
          <div class="w-[80%] pb-10">
            <Transition name="fade" mode="out-in">
              <LoginDialog v-if="mode === 'login'" key="login" />
              <SignupDialog v-else key="signup" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Basic fade transition for component switching */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
